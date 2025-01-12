import {defineField, defineType} from 'sanity'

export const domainType = defineType({
  name: 'domain',
  title: 'Domain',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      description: 'The slug ( part of the url - for better seo - use it for dynamic named routing ( i.e design single template page for every event ) ) for the event',
      options: { source: 'name' }, 
      hidden: ({document}) =>  !document?.name ,
    }),

    defineField({
      name: 'poster',
      type: 'image',
    }),


  ],
})