export const data = {
  id: 10,
  label: "Presidente",
  children: [
    {
      id: 1,
      label: "Administrativo",
      children: [
        {
          id: 4,
          label: "Diretor",
          children: [],
        },
        {
          id: 5,
          label: "Diretor",
          children: [
            {
              id: 44,
              label: "Cargo",
              children: [],
            },
          ],
        },
        {
          id: 6,
          label: "Financeiro",
          children: [
            {
              id: 12,
              label: "Contador",
              children: [
                {
                  id: 42,
                  label: "Cargo 1",
                  children: [],
                },
                {
                  id: 52,
                  label: "Cargo 2",
                  children: [],
                },
                {
                  id: 62,
                  label: "Cargo 3",
                  children: [],
                },
              ],
            },
            {
              id: 23,
              label: "Cargo 4",
              children: [],
            },
            {
              id: 33,
              label: "Cargo 5",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Diretor 1",
      children: [],
    },
    {
      id: 3,
      label: "Diretor 2",
      children: [],
    },
  ],
};
