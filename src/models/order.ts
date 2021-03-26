export interface Order{
    id: number,
    subject: string,
    requestDate: Date,
    latestUpdate: Date,
    statusName: string,
    phone: string,
    attendant: string
}