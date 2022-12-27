type Owner = {
  id: number;
  avatar_url: string;
  url: string;
  login: string;
};

type Repository = {
  id: number;
  description: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
};
