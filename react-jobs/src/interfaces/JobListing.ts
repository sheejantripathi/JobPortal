export interface CompanyDetails {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  }
  
export  interface JobListing {
    id: string;
    title: string;
    type: string;
    description: string;
    location: string;
    salary: string;
    company: CompanyDetails;
  }
