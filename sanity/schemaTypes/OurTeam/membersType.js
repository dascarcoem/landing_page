import {defineField, defineType} from 'sanity'

export const membersType = defineType({
  name: 'members',
  title: 'Members',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      group: 'basic',
      description: 'The slug ( part of the url - for better seo - use it for dynamic named routing ( i.e design single template page for every event ) ) for the event',
      options: { source: 'name' }, 
      hidden: ({document}) =>  !document?.name ,
    }),
    
    defineField({
      name: 'domain',
      type: 'reference',
      to: [{type: 'domain'}],
    }),
    
    // defineField({
    //   name: 'domainoptions',
    //   type: 'string',
    //   options: {
    //     list: [ 'tech' , 'events' , 'design' , 'marketing' , 'finance' , 'hr' , 'legal' , 'operations' , 'sales' , 'product' , 'others'],
    //   }
    // }),
    
    defineField({
      name: 'position',
      type: 'string',
      options: {
        list: [ 'mentor' , 'Teacher In-Charge' , 'President' , 'Vice-President' , 'Lead' , 'Co-lead'  , 'Member' , 'volunteer' ],
      }
    }),
    
    defineField({
      name: 'year',
      type: 'string',
      options: {
        list: [ '1st' , '2nd' , '3rd' , '4th' , 'passout'],
        layout: 'radio',
      }
    }),
    
    defineField({
      name: 'branch',
      type: 'string',
      options: {
        list: [ 'cse', 'it' , 'ds' , 'cyber' , 'aiml' , 'ecs' , 'ece', 'eee', 'mech', 'civil', 'biotech', 'chemical', 'others'],
      }
    }),

    defineField({
      name: 'github',
      type: 'string',
    }),

    defineField({
      name: 'linkedin',
      type: 'string',
    }),

    defineField({
      name: 'portfolio_Website',
      type: 'string',
    }),

    defineField({
      name: 'Profile_Photo',
      type: 'image',
    }),

  ],
})