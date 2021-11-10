import { IFileAdded, IFileApproved, IFileDeleted, IFileReverted, IFileUpdated, IProjectApproved, IProjectTranslated, IStringAdded, IStringDeleted, iStringUpdated, ISuggestionAdded, ISuggestionApproved, ISuggestionDeleted, ISuggestionUpdated, ITranslationUpdated } from '../../events/EventInterfaces';
import { Embed, getUser } from '../Discord';
import { StatusColor } from './Status';


export const fileApproved = (data: IFileApproved) => {
  const embed: Embed = {}
  embed.color = StatusColor.APPROVED
  embed.title = '__**File Approved**__'
  embed.description = `**Language**: ${data.language}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}


export const fileAdded = (data: IFileAdded) => {
  const embed: Embed = {}
  const user = getUser(data.user)
  embed.color = StatusColor.ADDED
  embed.title = '__**File Added**__'
  embed.description = `**Author**: ${user.returns?.mention ?? data.user}\nRevision: ${data.revision}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}




export const fileUpdated = (data: IFileUpdated) => {
  const embed: Embed = {}
  const user = getUser(data.user)
  embed.color = StatusColor.UPDATED
  embed.title = '__**File Updated**__'
  embed.description = `**Author**: ${user.returns?.mention ?? data.user}\nRevision: ${data.revision}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}




export const fileReverted = (data: IFileReverted) => {
  const embed: Embed = {}
  const user = getUser(data.user)
  embed.color = StatusColor.REVERTED
  embed.title = '__**File Reverted**__'
  embed.description = `**Author**: ${user.returns?.mention ?? data.user}\nRevision: ${data.revision}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}




export const fileDeleted = (data: IFileDeleted) => {
  const embed: Embed = {}
  const user = getUser(data.user)
  embed.color = StatusColor.DELETED
  embed.title = '__**File Deleted**__'
  embed.description = `**Author**: ${user.returns?.mention ?? data.user}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}




export const projectTranslated = (data: IProjectTranslated) => {
  const embed: Embed = {}
  embed.color = StatusColor.TRANSLATED
  embed.title = '__**Project Translated**__'
  embed.description = `Language: ${data.language}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}




export const projectApproved = (data: IProjectApproved) => {
  const embed: Embed = {}
  embed.color = StatusColor.APPROVED
  embed.title = '__**Project Approved**__'
  embed.description = `Language: ${data.language}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}



export const transationUpdated = (data: ITranslationUpdated) => {
  const embed: Embed = {}
  const user = getUser(data.user)
  let text = '\n\n```diff\n# Source String ID\n! {source_string_id}\n\n# Old Translate ID\n- {old_translate_id}\n\n# New Translate ID\n+ {new_translate_id}\n```'
    .replace(/{source_string_id}/g, data.source_string_id)
    .replace(/{old_translate_id}/g, data.old_translate_id)
    .replace(/{new_translate_id}/g, data.new_translate_id)

  embed.color = StatusColor.UPDATED
  embed.title = '__**Translation Updated**__'
  embed.description = `**Author**: ${user.returns?.mention ?? data.user}\n${text}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}



export const stringAdded = (data: IStringAdded) => {
  const embed: Embed = {}
  const user = getUser(data.user)
  let text = '\n\n```diff\n+ {STRING}\n```'
    .replace(/{STRING}/g, data.string_id)

  embed.color = StatusColor.ADDED
  embed.title = '__**String Added**__'
  embed.description = `**Author**: ${user.returns?.mention ?? data.user}\n${text}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}




export const stringUpdated = (data: iStringUpdated) => {
  const embed: Embed = {}
  const user = getUser(data.user)
  let text = '\n\n```diff\n! {STRING}\n```'
    .replace(/{STRING}/g, data.string_id)

  embed.color = StatusColor.UPDATED
  embed.title = '__**String Updated**__'
  embed.description = `**Author**: ${user.returns?.mention ?? data.user}\n${text}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}



export const stringDeleted = (data: IStringDeleted) => {
  const embed: Embed = {}
  const user = getUser(data.user)
  let text = '\n\n```diff\n- {STRING}\n```'
    .replace(/{STRING}/g, data.string_id)

  embed.color = StatusColor.DELETED
  embed.title = '__**String Deleted**__'
  embed.description = `**Author**: ${user.returns?.mention ?? data.user}\n${text}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}



export const suggestionAdded = (data: ISuggestionAdded) => {
  const embed: Embed = {}
  const user = getUser(data.user)
  let text = '\n\n```diff\n+ {STRING}\n```'
    .replace(/{STRING}/g, data.source_string_id)

  embed.color = StatusColor.ADDED
  embed.title = '__**String Added**__'
  embed.description = `**Author**: ${user.returns?.mention ?? data.user}\n**Language**: ${data.language}\n**Translation ID**: ${data.translation_id}\n${text}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}



export const suggestionUpdated = (data: ISuggestionUpdated) => {
  const embed: Embed = {}
  const user = getUser(data.user)
  let text = '\n\n```diff\n+ {STRING}\n```'
    .replace(/{STRING}/g, data.source_string_id)

  embed.color = StatusColor.UPDATED
  embed.title = '__**String Updated**__'
  embed.description = `**Author**: ${user.returns?.mention ?? data.user}\n**Language**: ${data.language}\n**Translation ID**: ${data.translation_id}\n${text}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}




export const suggestionDeleted = (data: ISuggestionDeleted) => {
  const embed: Embed = {}
  const user = getUser(data.user)
  let text = '\n\n```diff\n+ {STRING}\n```'
    .replace(/{STRING}/g, data.source_string_id)

  embed.color = StatusColor.DELETED
  embed.title = '__**String Updated**__'
  embed.description = `**Author**: ${user.returns?.mention ?? data.user}\n**Language**: ${data.language}\n**Translation ID**: ${data.translation_id}\n${text}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}




export const suggestionApproved = (data: ISuggestionApproved) => {
  const embed: Embed = {}
  const user = getUser(data.user)
  let text = '\n\n```diff\n+ {STRING}\n```'
    .replace(/{STRING}/g, data.source_string_id)

  embed.color = StatusColor.APPROVED
  embed.title = '__**String Updated**__'
  embed.description = `**Author**: ${user.returns?.mention ?? data.user}\n**Language**: ${data.language}\n**Translation ID**: ${data.translation_id}\n${text}`
  embed.timestamp = new Date(Date.now()).toISOString()
  return embed
}


export const eventIdentify = (event: string, data: any) => {
  switch (event) {
    case 'file.approved': {
      return fileApproved(data)
    }
    case 'file.added': {
      return fileApproved(data)
    }
    case 'file.updated': {
      return fileUpdated(data)
    }
    case 'file.reverted': {
      return fileReverted(data)
    }
    case 'file.deleted': {
      return fileDeleted(data)
    }
    case 'project.translated': {
      return projectTranslated(data)
    }
    case 'project.approved': {
      return projectApproved(data)
    }
    case 'translation.updated': {
      return transationUpdated(data)
    }
    case 'string.added': {
      return stringAdded(data)
    }
    case 'string.updated': {
      return stringUpdated(data)
    }
    case 'string.deleted': {
      return stringDeleted(data)
    }
    case 'suggestion.added': {
      return suggestionAdded(data)
    }
    case 'suggestion.updated': {
      return suggestionUpdated(data)
    }
    case 'suggestion.deleted': {
      return suggestionDeleted(data)
    }
    case 'suggestion.approved': {
      return suggestionDeleted(data)
    }
    default:
      const embed: Embed = {}
      embed.color = StatusColor.UNKNOWN_EVENT
      embed.description = `Unknown event. (${data.event ?? 'null'})`
      embed.timestamp = new Date(Date.now()).toISOString()
      return embed
  }
}






