export interface IFileApproved {
  event: string;
  project: string;
  project_id: string;
  language: string;
  file_id: string;
  file: string;
}

export interface IFileAdded {
  event: string;
  project: string;
  project_id: string;
  file_id: string;
  file: string;
  user_id: string;
  user: string;
  revision: string;
}

export interface IFileUpdated {
  event: string;
  project: string;
  project_id: string;
  file_id: string;
  file: string;
  user_id: string;
  user: string;
  revision: string;
} 


export interface IFileReverted {
  event: string;
  project: string;
  project_id: string;
  file_id: string;
  file: string;
  user_id: string;
  user: string;
  revision: string;
}

export interface IFileDeleted {
  event: string;
  project: string;
  project_id: string;
  file_id: string;
  file: string;
  user_id: string;
  user: string;
}


export interface IProjectTranslated {
  event: string;
  project: string;
  project_id: string;
  language: string;
}


export interface IProjectApproved {
  event: string;
  project: string;
  project_id: string;
  language: string;
}

export interface ITranslationUpdated {
  event: string;
  project: string;
  project_id: string;
  language: string;
  source_string_id: string;
  old_translate_id: string;
  new_translate_id: string;
  user: string;
  user_id: string;
  file_id: string;
  file: string;
}

export interface IStringAdded {
  event: string;
  project: string;
  project_id: string;
  string_id: string;
  user: string;
  user_id: string;
  file_id: string;
  file: string;
}


export interface iStringUpdated {
  event: string;
  project: string;
  project_id: string;
  string_id: string;
  user: string;
  user_id: string;
  file_id: string;
  file: string;
}

export interface IStringDeleted {
  event: string;
  project: string;
  project_id: string;
  string_id: string;
  user: string;
  user_id: string;
  file_id: string;
  file: string;
}

export interface ISuggestionAdded {
  event: string;
  project: string;
  project_id: string;
  language: string;
  source_string_id: string;
  translation_id: string;
  user: string;
  user_id: string;
  file_id: string;
  file: string;
}

export interface ISuggestionUpdated {
  event: string;
  project: string;
  project_id: string;
  language: string;
  source_string_id: string;
  translation_id: string;
  user: string;
  user_id: string;
  file_id: string;
  file: string;
}

export interface ISuggestionDeleted {
  event: string;
  project: string;
  project_id: string;
  language: string;
  source_string_id: string;
  translation_id: string;
  user: string;
  user_id: string;
  file_id: string;
  file: string;
}

export interface ISuggestionApproved {
  event: string;
  project: string;
  project_id: string;
  language: string;
  source_string_id: string;
  translation_id: string;
  user: string;
  user_id: string;
  file_id: string;
  file: string;
}


export interface Data {
  event: string;
}

export interface EventLoad {
  events: Data[]
}