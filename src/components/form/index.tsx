'use client'

import { useState } from 'react'

import { formSchema } from '@/schemas/contactFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

type ContactFormValues = z.infer<typeof formSchema>

export default function FormComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    if (hasSubmitted) {
      toast.error("You've already submitted the contact.", {
        richColors: true,
      })
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      toast.success(
        "Your message was sent successfully! I'll get back to you as soon as possible.",
        {
          richColors: true,
        },
      )

      setHasSubmitted(true)
      form.reset()
    } catch (error) {
      toast.error('Failed to send message. Please try again later.', {
        richColors: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-3">
        <div className="flex w-full space-x-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="email" placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea
                  className="bg-border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-px flex h-32 w-full rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] placeholder:text-white/30 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={isSubmitting || hasSubmitted}
          type="submit"
          className="w-full duration-300"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>

        {hasSubmitted && (
          <p className="mt-3 text-center text-sm text-white/70">
            Thank you for your message! I will get back to you soon.
          </p>
        )}
      </form>
    </Form>
  )
}
