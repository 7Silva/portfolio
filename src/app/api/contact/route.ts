import { EdgeConfigWebhook } from '@/types/webhook'
import { get } from '@vercel/edge-config'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const messageSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = messageSchema.parse(body)

    const webhookTemplate = await get<EdgeConfigWebhook['discord']>('discord')

    const replacePlaceholders = (
      template: EdgeConfigWebhook['discord'],
      data: Record<string, string>,
    ) => {
      const str = JSON.stringify(template)
      const replaced = str.replace(/\{([\w]+)\}/g, (_, key) => data[key] || '')
      return JSON.parse(replaced)
    }

    const webhookBody = replacePlaceholders(webhookTemplate!, {
      name,
      email,
      message,
    })

    webhookBody.contact.embeds[0].timestamp = new Date().toISOString()

    const response = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody.contact),
    })

    if (!response.ok) {
      throw new Error('Failed to send message to Discord')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
