export const data = {
  id: 1,
  label: 'President',
  tot: 'President',
  children: [
    {
      id: 2,
      label: 'Administrative',
      children: [
        {
          id: 3,
          label: 'Director',
          children: [],
        },
        {
          id: 4,
          label: 'Manager',
          children: [
            {
              id: 5,
              label: 'Office 1',
              children: [],
            },
          ],
        },
        {
          id: 6,
          label: 'Financial',
          children: [
            {
              id: 7,
              label: 'Accountant',
              children: [
                {
                  id: 8,
                  label: 'Office 2',
                  children: [],
                },
                {
                  id: 9,
                  label: 'Office 3',
                  children: [],
                },
                {
                  id: 10,
                  label: 'Office 4',
                  children: [],
                },
              ],
            },
            {
              id: 11,
              label: 'Office 5',
              children: [],
            },
            {
              id: 12,
              label: 'Office 6',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 13,
      label: 'Manager 2',
      children: [],
    },
    {
      id: 14,
      label: 'Manager 3',
      children: [],
    },
  ],
};
