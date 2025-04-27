const  stepsDetails = [
    {
      title : 'Personal Info',
      fields : [
        {
          label : 'Full Name',
          name : 'fullname',
          rules : [{required : true}],
          type : 'text'
        },
        {
          label : 'Father Name',
          name : 'fathername',
          rules : [{required : true}],
          type : 'text'
        },
        {
          label : 'CNIC',
          name : 'cnic',
          rules : [{required : true}],
          type : 'number'
        },
        {
          label : 'DOB',
          name : 'dateofbirth',
          rules : [{required : true}],
          type : 'date'
        },
        {
          label : 'Gender',
          name : 'gender',
          rules : [{required : true}],
          type : 'select',
          options : [
            {label : 'Male', value : 'male'},
            {label : 'Female' , value : 'female'}
          ]
        },
        {
          label : 'Marital',
          name : 'marital-status',
          rules : [{required : true}],
          type : 'select',
          options : [
            {label : 'Single', value : 'single'},
            {label : 'Married' , value : 'married'}
          ]
        },
      ]
    },
    {
      title: 'Employment Info',
      fields : [
        { label: 'Employment Status', name: 'employment-status', rules: [{ required: true }], type: 'select', options: [
          { value: 'employed', label: 'Employed' },
          { value: 'unemployed', label: 'Unemployed' },
        ] },
        { label: 'Monthly Income', name: 'income', rules: [{ required: true }], type: 'text' },
        { label: 'Job Title', name: 'jobTitle', rules: [], type: 'text' },
      ]
    },
    {
      title : 'Documents',
      fields : [
        { label: 'CNIC Front', name: 'cnic-front', rules: [{ required: true }], type: 'file' },
          { label: 'CNIC Back', name: 'cnic-back', rules: [{ required: true }], type: 'file' },
          { label: 'Income Proof', name: 'income-proof', rules: [{ required: true }], type: 'file' },
      ]
    }
  ];

  export default stepsDetails