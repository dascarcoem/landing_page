import { defineField, defineType } from "sanity";
import { UserIcon } from '@sanity/icons';

export const alumniType = defineType({
    name: 'alumni',
    title: 'Alumni',
    type: 'document',
    icon: UserIcon, 

    groups: [
      { name: 'basic', title: 'Basic' },
      { name: 'socialContact', title: 'Social & Contact' },
      { name: 'work', title: 'Work' },
    ],

    fields: [
      // Basic Information
      defineField({
        name: 'name',
        type: 'string',
        title: 'Full Name',
        group: 'basic',
        validation: (Rule) => Rule.required().min(3).warning('Full name is required'),
      }),

      defineField({
        name: 'img',
        type: 'image',
        title: 'Profile Picture',
        group: 'basic',
        options: { hotspot: true },
      }),

      defineField({
        name: 'graduation_year',
        type: 'number',
        title: 'Graduation Year',
        group: 'basic',
        validation: (Rule) => Rule.required().min(1900).max(new Date().getFullYear()).warning('Invalid year'),
      }),

      // Social & Contact Information
      defineField({
        name: 'socials',
        type: 'object',
        title: 'Socials',
        group: 'socialContact',
        fields: [
          defineField({
            name: 'linkedin',
            type: 'url',
            title: 'LinkedIn',
            validation: (Rule) => Rule.required().uri().warning('Please provide a valid LinkedIn URL'),
          }),
          defineField({
            name: 'github',
            type: 'url',
            title: 'GitHub',
            validation: (Rule) => Rule.uri().warning('Please provide a valid GitHub URL'),
          }),
          defineField({
            name: 'email',
            type: 'string',
            title: 'Email',
            validation: (Rule) => Rule.required().email().warning('Valid email is required'),
          }),
          defineField({
            name: 'personal_website',
            type: 'url',
            title: 'Personal Website',
            validation: (Rule) => Rule.uri().warning('Please provide a valid website URL (optional)'),
          }),
        ],
      }),

      defineField({
        name: 'bio',
        type: 'text',
        title: 'Short Biography',
        group: 'basic',
        validation: (Rule) => Rule.required().min(10).warning('Please provide a short bio'),
      }),

      // Work Information
      defineField({
        name: 'current_company',
        type: 'string',
        title: 'Current Company',
        group: 'work',
        validation: (Rule) => Rule.required().warning('Please specify your current company'),
      }),

      defineField({
        name: 'past_companies',
        type: 'array',
        title: 'Past Companies',
        group: 'work',
        of: [{ type: 'string' }],
        validation: (Rule) => Rule.required().min(1).warning('Please provide at least one past company'),
      }),
      
      defineField({
        name: 'skills',
        type: 'array',
        title: 'Skills',
        group: 'work',
        of: [{ type: 'string' }],
        validation: (Rule) => Rule.required().min(1).warning('Please provide at least one Skill'),
      }),

      defineField({
        name: 'role',
        type: 'string',
        title: 'Role/Title',
        group: 'work',
        validation: (Rule) => Rule.required().min(3).warning('Please specify your role or title'),
      }),

      defineField({
        name: 'location',
        type: 'string',
        title: 'Location',
        group: 'work',
        validation: (Rule) => Rule.required().min(3).warning('Please provide your location'),
      }),

      // Additional Contact/Work Preferences (if any)
      defineField({
        name: 'contact_preference',
        type: 'string',
        title: 'Preferred Contact Method',
        group: 'socialContact',
        options: {
          list: [
            { title: 'Email', value: 'email' },
            { title: 'LinkedIn', value: 'linkedin' },
            { title: 'GitHub', value: 'github' },
          ],
        },
        validation: (Rule) => Rule.required().warning('Please specify your preferred contact method'),
      }),
    ],
});
