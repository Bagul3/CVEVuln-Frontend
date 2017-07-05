import { Vulnerabilities } from '../models/vulnerabilities';

export class BaseApiResult
{
    constructor(
      public IsSuccess: boolean,
      public  Message: string,
      public SoftwareName: string,
      public Vulnerabilities: Vulnerabilities
    ){}
}