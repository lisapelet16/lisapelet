export type ContactPerson = {
  name: string;
  phoneDisplay: string;
  phoneTel: string;
};

export const companyEmail = "lisa.pelet16@gmail.com";
export const companyLocation = "Kestel / BURSA";

export const contactPeople: ContactPerson[] = [
  {
    name: "Levent PEHLİVAN",
    phoneDisplay: "0 546 797 09 06",
    phoneTel: "905467970906",
  },
  {
    name: "Mert PEHLİVAN",
    phoneDisplay: "0 545 654 93 30",
    phoneTel: "905456549330",
  },
];

export const primaryContact = contactPeople[0];
