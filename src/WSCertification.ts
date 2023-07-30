import * as fs from "fs";
import { TCertificate } from "./types";

class WSCertification {
  private json: TCertificate;

  /**
   * @param url - general url to the certificate json file that was generated on the platform
   */
  constructor(url: string) {
    this.json = this.readJson(url);
    this.validate();
  }

  public toString(): string {
    return `[object WSCertification]`;
  }

  /**
   * Returns the certificate object
   * @returns certificate object
   * @example
   * const certificate = new WSCertification("./certificate.json");
   * console.log(certificate.certificate);
   *
   * // Output:
   * // {
   * //   AccessToken: string;
   * //   ApplicationId: number;
   * //   CertificateId: string;
   * //   CreatedAt: string;
   * // }
   */
  public get certificate(): TCertificate {
    return {
      AccessToken: this.json.AccessToken,
      ApplicationId: this.json.ApplicationId,
      CertificateId: this.json.CertificateId,
      CreatedAt: this.json.CreatedAt,
    };
  }

  /**
   * Reads the json file and returns the parsed json object
   * @param url - general url to the certificate json file that was generated on the platform
   * @throws {Error} - if the file does not exist
   * @returns parsed json object
   */
  private readJson(url: string): any {
    try {
      const file = fs.readFileSync(url, "utf8");
      return JSON.parse(file);
    } catch (error: any) {
      if (error.code === "ENOENT")
        throw new Error("Provided file does not exist");

      throw error;
    }
  }

  /**
   * Validates the json object
   * @throws {Error} - if the json object is invalid
   */
  private validate(): void {
    if (
      !this.json.AccessToken ||
      typeof this.json.AccessToken !== "string" ||
      !this.json.ApplicationId ||
      typeof this.json.ApplicationId !== "number" ||
      !this.json.CertificateId ||
      typeof this.json.CertificateId !== "string" ||
      !this.json.CreatedAt ||
      typeof this.json.CreatedAt !== "string"
    )
      throw new Error("Invalid certificate");
  }
}

export default WSCertification;
