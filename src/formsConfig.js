const formsConfig = [
  {
    id: 1,
    state: 'object',
    title: 'Personal Details',
    fields: [
      {
        isInput: true,
        isRequired: true,
        label: 'Full Name',
        type: 'text',
        name: 'fullName',
        id: 'fullName'
      },
      {
        isInput: true,
        isRequired: true,
        label: 'Phone Number',
        type: 'tel',
        name: 'phoneNumber',
        id: 'phoneNumber'
      },
      {
        isInput: true,
        isRequired: false,
        label: 'Email',
        type: 'text',
        name: 'email',
        id: 'email'
      },
      {
        isInput: true,
        isRequired: false,
        label: 'LinkedIn Account',
        type: 'text',
        name: 'linkedin',
        id: 'linkedin'
      },
      {
        isInput: true,
        isRequired: false,
        label: 'Portfolio Account',
        type: 'text',
        name: 'portfolio',
        id: 'portfolio'
      },
      {
        isInput: false,
        isRequired: false,
        label: 'Your Short Description',
        name: 'shortDescription',
        id: 'shortDescription'
      }
    ]
  },
  {
    id: 2,
    state: 'array',
    title: 'Educations',
    fields: [
      {
        isInput: true,
        isRequired: false,
        label: 'University',
        type: 'text',
        name: 'university',
        id: 'university'
      },
      {
        isInput: true,
        isRequired: false,
        label: 'Start Year',
        type: 'text',
        name: 'startYear',
        id: 'startYear'
      },
      {
        isInput: true,
        isRequired: false,
        label: 'Graduate Year',
        type: 'text',
        name: 'gradYear',
        id: 'gradeYear'
      },
      {
        isInput: true,
        isRequired: false,
        label: 'Degree',
        type: 'text',
        name: 'degree',
        id: 'degree'
      },
      {
        isInput: true,
        isRequired: false,
        label: 'Grade',
        type: 'text',
        name: 'grade',
        id: 'grade'
      }
    ]
  },
  {
    id: 3,
    state: 'array',
    title: 'Experiences',
    fields: [
      {
        isInput: true,
        isRequired: false,
        label: 'Company',
        type: 'text',
        name: 'company',
        id: 'company'
      },
      {
        isInput: true,
        isRequired: false,
        label: 'Role',
        type: 'text',
        name: 'role',
        id: 'role'
      },
      {
        isInput: true,
        isRequired: false,
        label: 'Start Year',
        type: 'text',
        name: 'startYearExperience',
        id: 'startYearExperience'
      },
      {
        isInput: true,
        isRequired: false,
        label: 'End Year',
        type: 'text',
        name: 'endYear',
        id: 'endYear'
      },
      {
        isInput: false,
        isRequired: false,
        label: 'Job Description',
        type: 'jobdesc',
        name: 'jobdesc',
        id: 'jobdesc'
      }
    ]
  }
];

export default formsConfig;
