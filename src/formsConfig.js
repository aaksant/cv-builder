const formsConfig = [
  {
    id: crypto.randomUUID(),
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
  }
];

export default formsConfig;
