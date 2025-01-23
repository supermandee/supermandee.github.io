'use client'

import { DiscussionEmbed } from 'disqus-react'

export default function Comments({ slug, title }: { slug: string, title: string }) {
  return (
    <DiscussionEmbed 
      shortname='couch-to-startup'
      config={{
        url: `https://couchtostartup.com/blog/${slug}`,
        identifier: slug,
        title: title,
        language: 'en_US'
      }}
    />
  )
}