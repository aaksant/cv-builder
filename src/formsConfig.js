const formsConfig = [
  {
    id: 1,
    state: 'object',
    title: 'Personal Details',
    fields: [
      {
        isInput: true,
        label: 'Full Name',
        type: 'text',
        name: 'fullName',
        id: 'fullName',
        isRequired: true
      },
      {
        isInput: true,
        label: 'Phone Number',
        type: 'tel',
        name: 'phoneNumber',
        id: 'phoneNumber',
        isRequired: true
      },
      {
        isInput: true,
        label: 'Email',
        type: 'text',
        name: 'email',
        id: 'email',
        isRequired: false
      },
      {
        isInput: true,
        label: 'LinkedIn Account',
        type: 'text',
        name: 'linkedin',
        id: 'linkedin',
        isRequired: false
      },
      {
        isInput: true,
        label: 'Portfolio Account',
        type: 'text',
        name: 'portfolio',
        id: 'portfolio',
        isRequired: false
      },
      {
        isInput: false,
        label: 'Short Description',
        name: 'shortDescription',
        id: 'shortDescription',
        isRequired: false
      }
    ]
  },
  {
    id: 2,
    state: 'array',
    title: 'Educations',
    fields: [
      {
        label: 'University',
        type: 'text',
        name: 'university',
        id: 'university',
        isRequired: false
      },
      {
        label: 'Start Year',
        type: 'text',
        name: 'startYear',
        id: 'startYear',
        isRequired: false
      },
      {
        label: 'Graduate Year',
        type: 'text',
        name: 'gradYear',
        id: 'gradeYear',
        isRequired: false
      },
      {
        label: 'Degree',
        type: 'text',
        name: 'degree',
        id: 'degree',
        isRequired: false
      },
      {
        label: 'Grade',
        type: 'text',
        name: 'grade',
        id: 'grade',
        isRequired: false
      }
    ]
  }
];

export default formsConfig;
