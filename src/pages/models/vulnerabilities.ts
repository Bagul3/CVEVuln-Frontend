export class Vulnerabilities
{
    constructor(
        public Id: number,
        public cve_id: string,
        public cwe_id: string,
        public summary: string,
        public cvss_score: string,
        public exploit_count: string,
        public publish_date: any,
        public update_date: any,
        public url: string,
        public service: string
    )
    {}
}