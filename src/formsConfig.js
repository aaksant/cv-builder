const formsConfig = [
  {
    id: crypto.randomUUID(),
    title: 'Personal Details',
    fields: [
      { label: 'Full Name', type: 'text', name: 'fullName', id: 'fullName' },
      {
        label: 'Phone Number',
        type: 'tel',
        name: 'phoneNumber',
        id: 'phoneNumber'
      },
      { label: 'Email', type: 'text', name: 'email', id: 'email' },
      { label: 'Address', type: 'text', name: 'address', id: 'address' }
    ]
  }
];

export default formsConfig;
