import mock from "./../mock";
import { FuseUtils } from "@fuse";

const notesDB = {
  notes: [
    {
      id: "5739d1fb4d27bc5341fd33s1",
      title: "John works on Saturdays and is usually unavailable",
      description: "",
      archive: false,
      image: "",
      time: "2018-02-25T04:01:06.587Z",
      reminder: null,
      checklist: [],
      labels: ["5725a6809fdd915739187ed5"]
    },
    {
      id: "5739d1fbf4e68a871a3c9ab8",
      title: "Upcoming Events",
      description: "Family Reunion",
      archive: false,
      image: "",
      time: "2018-04-21T02:33:11.587Z",
      reminder: null,
      checklist: [
        {
          id: "1",
          checked: false,
          text: "Complete next rounds of CBT"
        },
        {
          id: "2",
          checked: false,
          text: "Recommend guidelines for certain topics"
        },
        {
          id: "3",
          checked: true,
          text: "Discuss potential trigger points"
        },
        {
          id: "4",
          checked: false,
          text: "Follow-up"
        }
      ],
      labels: ["5725a6802d10e277a0f35739"]
    },
    {
      id: "5739d1fbf2726fe3e5e5014a",
      title: "Potential Treatment Options",
      description: "",
      archive: false,
      image: "",
      time: "2018-04-10T22:18:14.587Z",
      reminder: "2018-04-13T11:09:00.587Z",
      checklist: [
        {
          id: "1",
          checked: false,
          text: "CBT"
        },
        {
          id: "2",
          checked: false,
          text: "PE"
        },
        {
          id: "3",
          checked: true,
          text: "CPT"
        },
        {
          id: "4",
          checked: false,
          text: "IPT"
        },
        {
          id: "5",
          checked: true,
          text: "FFT"
        }
      ],
      labels: ["5725a68031fdbb1db2c1af47"]
    },
    {
      id: "5739d1fb47d9bac96ec0d54d",
      title: "Thoughts on his outlook",
      description: "John seems to be making incremental, yet steady...",
      archive: false,
      image: "",
      time: "2018-01-21T22:46:48.587Z",
      reminder: "2018-05-14T06:47:19.587Z",
      checklist: [
        {
          id: "5",
          checked: false,
          text: "Ask if he'd like to partake in a clinical trial"
        }
      ],
      labels: ["5725a6806acf030f9341e925", "5725a68031fdbb1db2c1af47"]
    },

    {
      id: "5739d1fb46da846f60d70b2c",
      title: "Latest Convo Points",
      description: "",
      archive: false,
      image: "",
      time: "2018-02-08T15:13:56.587Z",
      reminder: "2018-04-25T09:40:39.587Z",
      checklist: [
        {
          id: "1",
          checked: false,
          text: "Picked up new hobby - hiking"
        },
        {
          id: "2",
          checked: true,
          text: "Feed the dog"
        }
      ],
      labels: ["5725a6806acf030f9341e925"]
    }
  ],
  labels: [
    {
      id: "5725a6802d10e277a0f35739",
      name: "Family",
      handle: "family"
    },
    {
      id: "5725a6809fdd915739187ed5",
      name: "Scheduling",
      handle: "Scheduling"
    },
    {
      id: "5725a68031fdbb1db2c1af47",
      name: "Todos",
      handle: "todos"
    },
    {
      id: "5725a6806acf030f9341e925",
      name: "Personal",
      handle: "personal"
    }
  ]
};

mock.onGet("/api/notes-app/notes").reply(config => {
  return [200, notesDB.notes];
});

mock.onGet("/api/notes-app/labels").reply(config => {
  return [200, notesDB.labels];
});

mock.onPost("/api/notes-app/create-note").reply(request => {
  const data = JSON.parse(request.data);
  const newNote = {
    ...data.note,
    id: FuseUtils.generateGUID()
  };
  notesDB.notes = [newNote, ...notesDB.notes];
  return [200, newNote];
});

mock.onPost("/api/notes-app/update-note").reply(request => {
  const data = JSON.parse(request.data);

  notesDB.notes = notesDB.notes.map(note => {
    if (data.note.id === note.id) {
      return data.note;
    }
    return note;
  });

  return [200, data.note];
});

mock.onPost("/api/notes-app/update-labels").reply(request => {
  const data = JSON.parse(request.data);

  notesDB.labels = data.labels;

  return [200, notesDB.labels];
});

mock.onPost("/api/notes-app/remove-note").reply(request => {
  const data = JSON.parse(request.data);

  notesDB.notes = notesDB.notes.filter(note => data.noteId !== note.id);

  return [200, notesDB.notes];
});
