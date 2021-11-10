import axios from 'axios';

export async function sendWebhook(data: any) {
  return await axios.post(`${process.env.WEBHOOK_URL}`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}