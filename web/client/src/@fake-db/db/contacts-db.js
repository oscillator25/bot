import mock from "./../mock";
import { FuseUtils } from "@fuse";
import _ from "@lodash";

const contactsDB = {
  contacts: [
    {
      id: "5725a680b3249760ea21de52",
      name: "John",
      lastName: "Doe",
      icon: "fiber_new",
      nickname: "Keefy",
      household: "Keitch#2412",
      date: "9/12/2017",
      company: "Saois",
      jobTitle: "Digital Archivist",
      email: "abbott@withinpixels.com",
      phone: "+1-202-555-0175",
      address: "933 8th Street Houston, TX 77004",
      birthday: undefined,
      notes: ""
    },
    {
      id: "5725a68009e20d0a9e9acf2a",
      name: "Barrera",
      lastName: "Bradbury",
      icon: "trending_up",
      nickname: "Jackal",
      household: "Bradbury#6529",
      date: "9/10/2017",
      company: "Unizim",
      jobTitle: "Graphic Designer",
      email: "barrera@withinpixels.com",
      phone: "+1-202-555-0196",
      address: "183 River Street Houston, TX 77005",
      birthday: undefined,
      notes: ""
    },
    {
      id: "5725a68007920cf75051da64",
      name: "Boyle",
      lastName: "Winters",
      icon: "trending_flat",
      nickname: "Jester",
      household: "Winters#1809",
      date: "9/2/2017",
      company: "Newo",
      jobTitle: "Catalogue Illustrator",
      email: "boyle@withinpixels.com",
      phone: "+1-202-555-0177",
      address: "218 Pearl Street Houston, TX 77523",
      birthday: undefined,
      notes: ""
    },
    {
      id: "5725a680bc670af746c435e2",
      name: "Copeland",
      lastName: "Redcliff",
      icon: "trending_flat",
      nickname: "Cloudlaw",
      household: "Redcliff#5902",
      date: "9/2/2017",
      company: "Tempron",
      jobTitle: "Multimedia Artist",
      email: "copeland@withinpixels.com",
      phone: "+1-202-555-0107",
      address: "956 6th Avenue Houston, TX 77008",
      birthday: undefined,
      notes: ""
    },
    {
      id: "5725a680ae1ae9a3c960d487",
      name: "Henderson",
      lastName: "Cambias",
      icon: "fiber_new",
      nickname: "Blizzard",
      household: "Cambias#9023",
      date: "9/12/2017",
      company: "Howcom",
      jobTitle: "Web Designer",
      email: "henderson@withinpixels.com",
      phone: "+1-202-555-0151",
      address: "686 Roosevelt Avenue Houston, TX 77842",
      birthday: undefined,
      notes: ""
    },
    {
      id: "5725a68034cb3968e1f79eac",
      name: "John",
      lastName: "Doe",
      icon: "report_problem",
      nickname: "Rose",
      household: "Doe#6124",
      date: "9/15/2017",
      company: "Lexicom",
      jobTitle: "Software Designer",
      email: "katina@withinpixels.com",
      phone: "+1-202-555-0186",
      address: "219 Woodland Road Valrico, TX 77152",
      birthday: undefined,
      notes: ""
    },
    {
      id: "5725a6808a178bfd034d6ecf",
      name: "Mai",
      lastName: "Nox",
      icon: "fiber_new",
      nickname: "Violetmage",
      household: "Nox#8029",
      date: "9/7/2017",
      company: "quadzone",
      jobTitle: "Software Engineer",
      email: "mai@withinpixels.com",
      phone: "+1-202-555-0199",
      address: "148 Heather Lane Houston, TX 77110",
      birthday: undefined,
      notes: ""
    },
    {
      id: "5725a680bbcec3cc32a8488a",
      name: "Nora",
      lastName: "Franklin",
      icon: "fiber_new",
      nickname: "Katanachanter",
      household: "Franklin#1034",
      date: "9/12/2017",
      company: "Saoway",
      jobTitle: "Database Coordinator",
      email: "nora@withinpixels.com",
      phone: "+1-202-555-0172",
      address: "572 Rose Street Houston, TX 77491",
      birthday: undefined,
      notes: ""
    },
    {
      id: "5725a6803d87f1b77e17b62b",
      name: "Odessa",
      lastName: "Goodman",
      icon: "trending_up",
      nickname: "Rose",
      household: "Goodman#3480",
      date: "9/1/2017",
      company: "transace",
      jobTitle: "Database Administration Manager",
      email: "odessa@withinpixels.com",
      phone: "+1-202-555-0190",
      address: "527 Jefferson Court Houston, TX 77012",
      birthday: undefined,
      notes: ""
    },
    {
      id: "5725a6802d10e277a0f35775",
      name: "Shauna",
      lastName: "Atherton",
      icon: "report_problem",
      nickname: "Faunasoul",
      household: "Atherton#6526",
      date: "9/12/2017",
      company: "Vivaflex",
      jobTitle: "Art Director",
      email: "shauna@withinpixels.com",
      phone: "+1-202-555-0159",
      address: "928 Canterbury Court Houston, TX 77206",
      birthday: undefined,
      notes: ""
    },
    {
      id: "5725a680cd7efa56a45aea5d",
      name: "Tillman",
      lastName: "Lee",
      icon: "fiber_new",
      nickname: "Gust",
      household: "Lee#6216",
      date: "9/11/2017",
      company: "K-techno",
      jobTitle: "News Photographer",
      email: "tillman@withinpixels.com",
      phone: "+1-202-555-0183",
      address: "447 Charles Street Houston, TX 77125",
      birthday: undefined,
      notes: ""
    },
    {
      id: "5725a68018c663044be49cbf",
      name: "Tyson",
      lastName: "Marshall",
      icon: "trending_up",
      nickname: "Honordread",
      household: "Marshall#6323",
      date: "9/6/2017",
      company: "Geocon",
      jobTitle: "Manuscript Editor",
      email: "tyson@withinpixels.com",
      phone: "+1-202-555-0146",
      address: "204 Clark Street Houston, TX 10952",
      birthday: undefined,
      notes: ""
    },
    {
      id: "5725a6809413bf8a0a5272b1",
      name: "Velazquez",
      lastName: "Smethley",
      icon: "fiber_new",
      nickname: "Strifedream",
      household: "Smethley#7621",
      date: "9/9/2017",
      company: "ranex",
      jobTitle: "Publications Editor",
      email: "velezquez@withinpixels.com",
      phone: "+1-202-555-0146",
      address: "261 Cleveland Street Houston, TX 77239",
      birthday: undefined,
      notes: ""
    }
  ],
  user: [
    {
      id: "5725a6802d10e277a0f35724",
      name: "John Doe",
      avatar: "assets/images/avatars/profile.jpg",
      starred: [
        "5725a680ae1ae9a3c960d487",
        "5725a6801146cce777df2a08",
        "5725a680bbcec3cc32a8488a",
        "5725a680bc670af746c435e2",
        "5725a68009e20d0a9e9acf2a"
      ],
      frequentContacts: [
        "5725a6809fdd915739187ed5",
        "5725a68031fdbb1db2c1af47",
        "5725a680606588342058356d",
        "5725a680e7eb988a58ddf303",
        "5725a6806acf030f9341e925",
        "5725a68034cb3968e1f79eac",
        "5725a6801146cce777df2a08",
        "5725a680653c265f5c79b5a9"
      ],
      groups: [
        {
          id: "5725a6802d10e277a0f35739",
          name: "Friends",
          contactIds: [
            "5725a680bbcec3cc32a8488a",
            "5725a680e87cb319bd9bd673",
            "5725a6802d10e277a0f35775"
          ]
        },
        {
          id: "5725a6802d10e277a0f35749",
          name: "Clients",
          contactIds: [
            "5725a680cd7efa56a45aea5d",
            "5725a68018c663044be49cbf",
            "5725a6809413bf8a0a5272b1",
            "5725a6803d87f1b77e17b62b"
          ]
        },
        {
          id: "5725a6802d10e277a0f35329",
          name: "Recent Workers",
          contactIds: [
            "5725a680bbcec3cc32a8488a",
            "5725a680653c265f5c79b5a9",
            "5725a6808a178bfd034d6ecf",
            "5725a6801146cce777df2a08"
          ]
        }
      ]
    }
  ]
};

mock.onGet("/api/contacts-app/contacts").reply(config => {
  const id = config.params.id;
  let response = [];
  switch (id) {
    case "frequent": {
      response = contactsDB.contacts.filter(contact =>
        contactsDB.user[0].frequentContacts.includes(contact.id)
      );
      break;
    }
    case "starred": {
      response = contactsDB.contacts.filter(contact =>
        contactsDB.user[0].starred.includes(contact.id)
      );
      break;
    }
    default: {
      response = contactsDB.contacts;
    }
  }
  return [200, response];
});

mock.onGet("/api/contacts-app/user").reply(config => {
  return [200, contactsDB.user[0]];
});

mock.onPost("/api/contacts-app/add-contact").reply(request => {
  const data = JSON.parse(request.data);
  contactsDB.contacts = [
    ...contactsDB.contacts,
    {
      ...data.newContact,
      id: FuseUtils.generateGUID()
    }
  ];
  return [200, contactsDB.contacts];
});

mock.onPost("/api/contacts-app/update-contact").reply(request => {
  const data = JSON.parse(request.data);

  contactsDB.contacts = contactsDB.contacts.map(contact => {
    if (data.contact.id === contact.id) {
      return data.contact;
    }
    return contact;
  });

  return [200, contactsDB.contacts];
});

mock.onPost("/api/contacts-app/remove-contact").reply(request => {
  const data = JSON.parse(request.data);

  contactsDB.contacts = contactsDB.contacts.filter(
    contact => data.contactId !== contact.id
  );

  return [200, contactsDB.contacts];
});

mock.onPost("/api/contacts-app/remove-contacts").reply(request => {
  const data = JSON.parse(request.data);
  contactsDB.contacts = contactsDB.contacts.filter(
    contact => !data.contactIds.includes(contact.id)
  );
  return [200, contactsDB.contacts];
});

mock.onPost("/api/contacts-app/toggle-starred-contact").reply(request => {
  const data = JSON.parse(request.data);
  contactsDB.user[0].starred = _.xor(contactsDB.user[0].starred, [
    data.contactId
  ]);
  return [200, contactsDB.user[0]];
});

mock.onPost("/api/contacts-app/toggle-starred-contacts").reply(request => {
  const data = JSON.parse(request.data);
  contactsDB.user[0].starred = _.xor(
    contactsDB.user[0].starred,
    data.contactIds
  );
  return [200, contactsDB.user[0]];
});

mock.onPost("/api/contacts-app/set-contacts-starred").reply(request => {
  const data = JSON.parse(request.data);

  contactsDB.user[0].starred = [
    ...contactsDB.user[0].starred,
    ...data.contactIds
  ];

  return [200, contactsDB.user[0]];
});

mock.onPost("/api/contacts-app/set-contacts-unstarred").reply(request => {
  const data = JSON.parse(request.data);

  contactsDB.user[0].starred = contactsDB.user[0].starred.filter(
    contactId => !data.contactIds.includes(contactId)
  );

  return [200, contactsDB.user[0]];
});
