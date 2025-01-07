const formsConfig = [
  {
    id: crypto.randomUUID(),
    state: 'object',
    title: 'Personal Details',
    fields: [
      {
        label: 'Full Name',
        type: 'text',
        name: 'fullName',
        id: 'fullName',
        isRequired: true
      },
      {
        label: 'Phone Number',
        type: 'tel',
        name: 'phoneNumber',
        id: 'phoneNumber',
        isRequired: true
      },
      { label: 'Email', type: 'text', name: 'email', id: 'email' },
      {
        label: 'Address',
        type: 'text',
        name: 'address',
        id: 'address',
        isRequired: true
      }
    ]
  },
  {
    id: crypto.randomUUID(),
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
