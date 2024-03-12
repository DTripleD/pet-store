export const categorys = [
  {
    id: 1,
    display: "Акції",
    path: "discount",
    dropdown: [
      {
        id: 11,
        display: "Корм для собак",
        path: "korm-dlya-sobak",
      },
      {
        id: 12,
        display: "Лікування",
        path: "odyag-dlya-sobak",
      },
      {
        id: 13,
        display: "Амуніція для собак",
        path: "igrashki-dlya-sobak",
      },
      {
        id: 14,
        display: "Аксесуари",
        path: "lasoshhi-dlya-sobak",
      },
      {
        id: 15,
        display: "Засоби для дому",
        path: "vitamini-dlya-sobak",
      },
      {
        id: 16,
        display: "Дресерування та спорт",
        path: "vitamini-dlya-sobak",
      },
    ],
  },
  {
    id: 2,
    display: "Собаки",
    path: "dogs",
    dropdown: [
      {
        id: 11,
        display: "Корм для собак",
        path: "korm-dlya-sobak",
      },
      {
        id: 12,
        display: "Лікування",
        path: "odyag-dlya-sobak",
      },
      {
        id: 13,
        display: "Амуніція для собак",
        path: "igrashki-dlya-sobak",
      },
      {
        id: 14,
        display: "Аксесуари",
        path: "lasoshhi-dlya-sobak",
      },
      {
        id: 15,
        display: "Засоби для дому",
        path: "vitamini-dlya-sobak",
      },
      {
        id: 16,
        display: "Дресерування та спорт",
        path: "vitamini-dlya-sobak",
      },
    ],
  },
  {
    id: 3,
    display: "Коти",
    path: "cats",
    dropdown: [
      {
        id: 21,
        display: "Корм для котів",
        path: "korm-dlya-kotiv",
      },
      {
        id: 22,
        display: "Одяг для котів",
        path: "odyag-dlya-kotiv",
      },
      {
        id: 23,
        display: "Іграшки для котів",
        path: "igrashki-dlya-kotiv",
      },
      {
        id: 24,
        display: "Ласощі для котів",
        path: "lasoshhi-dlya-kotiv",
      },
      {
        id: 25,
        display: "Вітаміни для котів",
        path: "vitamini-dlya-kotiv",
      },
    ],
  },
  {
    id: 4,
    display: "Гризуни",
    path: "smallpets",
    dropdown: [
      {
        id: 31,
        display: "Корм для гризунів",
        path: "korm-dlya-grizuniv",
      },
      {
        id: 32,
        display: "Клітки для гризунів",
        path: "klitki-dlya-grizuniv",
      },
      {
        id: 33,
        display: "Ласощі для гризунів",
        path: "lasoshhi-dlya-grizuniv",
      },
      {
        id: 34,
        display: "Вітаміни для гризунів",
        path: "vitamini-dlya-grizuniv",
      },
      {
        id: 35,
        display: "Іграшки для гризунів",
        path: "igrashki-dlya-grizunv",
      },
    ],
  },
  {
    id: 5,
    display: "Птахи",
    path: "birds",
    dropdown: [
      {
        id: 11,
        display: "Корм для собак",
        path: "korm-dlya-sobak",
      },
      {
        id: 12,
        display: "Лікування",
        path: "odyag-dlya-sobak",
      },
      {
        id: 13,
        display: "Амуніція для собак",
        path: "igrashki-dlya-sobak",
      },
      {
        id: 14,
        display: "Аксесуари",
        path: "lasoshhi-dlya-sobak",
      },
      {
        id: 15,
        display: "Засоби для дому",
        path: "vitamini-dlya-sobak",
      },
      {
        id: 16,
        display: "Дресерування та спорт",
        path: "vitamini-dlya-sobak",
      },
    ],
  },
  {
    id: 6,
    display: "Рептилії",
    path: "reptiles",
    dropdown: [
      {
        id: 11,
        display: "Корм для собак",
        path: "korm-dlya-sobak",
      },
      {
        id: 12,
        display: "Лікування",
        path: "odyag-dlya-sobak",
      },
      {
        id: 13,
        display: "Амуніція для собак",
        path: "igrashki-dlya-sobak",
      },
      {
        id: 14,
        display: "Аксесуари",
        path: "lasoshhi-dlya-sobak",
      },
      {
        id: 15,
        display: "Засоби для дому",
        path: "vitamini-dlya-sobak",
      },
      {
        id: 16,
        display: "Дресерування та спорт",
        path: "vitamini-dlya-sobak",
      },
    ],
  },
  {
    id: 7,
    display: "Риби",
    path: "fish",
    dropdown: [
      {
        id: 11,
        display: "Корм для собак",
        path: "korm-dlya-sobak",
      },
      {
        id: 12,
        display: "Лікування",
        path: "odyag-dlya-sobak",
      },
      {
        id: 13,
        display: "Амуніція для собак",
        path: "igrashki-dlya-sobak",
      },
      {
        id: 14,
        display: "Аксесуари",
        path: "lasoshhi-dlya-sobak",
      },
      {
        id: 15,
        display: "Засоби для дому",
        path: "vitamini-dlya-sobak",
      },
      {
        id: 16,
        display: "Дресерування та спорт",
        path: "vitamini-dlya-sobak",
      },
    ],
  },
];

export const getCategoryByPath = (path) => {
  return categorys.find((category) => category.path === path);
};
