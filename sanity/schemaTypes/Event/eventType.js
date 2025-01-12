import {defineField, defineType} from 'sanity'

import { CalendarIcon } from '@sanity/icons';

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon, 

  groups:[
    { name: 'basic' , title: 'Basic'},
    { name: 'venue' , title: 'Venue'  },
    { name: 'event-page-details' , title: 'Event Page Details'  },
  ],

  preview: {
    select:{
      title: 'name',
      subtitle: 'headline',
      media: 'image',
    }
  },

  fields: [
    defineField({
      name: 'name',
      type: 'string',
      group: ['basic'],
      placeholder : ' Event Name here',
      // initialValue : ' Event for Geeks',
      validation: (Rule) => Rule.required().min(3).warning('Event name should be descriptive.'),
    }),
    
    defineField({
      name: 'headline',
      type: 'string',
      group: 'basic',
      placeholder : 'Find a Catchy name for our Event for Geeks',
      validation: (Rule) => Rule.required().max(100).warning('Headline should be concise (max 100 characters).'),
    }),
    
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'event-page-details',
      description: 'The slug ( part of the url - for better seo - use it for dynamic named routing ( i.e design single template page for every event ) ) for the event',
      options: { source: 'name' }, 
      hidden: ({document}) =>  !document?.name ,
    }),
    defineField({
      name: 'eventType',
      type: 'string',
      group: 'venue',
      options: {
        list:[ 'in-person' , 'virtual'],
        layout: 'radio',
      }
    }),
    defineField({
      name: 'venue',
      type: 'string',
      group: 'venue',
      hidden: ({ document }) => document?.eventType === 'virtual',
    }),

    defineField({
      name: 'date',
      type: 'datetime',
      group: 'venue',
      validation: (Rule) =>
        Rule.required()
          .warning('Date is required.'),      
    }),
    
    defineField({
      name: 'poster',
      type: 'image',
      group: 'basic',
      validation: (Rule) =>
        Rule.required()
          .warning('Poster is required.'),
      description:'Can be instagram post graphic for the event'
    }),

    defineField({
      name: 'graphic',
      type: 'image',
      group: 'event-page-details',
    }),
    
    defineField({
      name: 'description',
      type:'array',
      of: [{type: 'block'}],
      group: 'event-page-details',
      validation: (Rule) =>
        Rule.required()
          .warning('Description is required.'),
    }),
    
    defineField({
      name: 'content',
      type:'array',
      of: [{type: 'block'}],
      group: 'event-page-details',
      validation: (Rule) =>
        Rule.required()
          .warning('Content is required.'),
    }),

    
    defineField({
      name: 'guidelines',
      type:'array',
      of: [{type: 'block'}],
      group: 'event-page-details ',
    }),
  ],
})


// list preview cusmtomization