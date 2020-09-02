interface AdminRegistration {
    uuid: string,
    roleId: number,
    name: string,
    username: string,
    password: string,
    status: number,
    createdBy: number,
    updatedBy: number
}

interface AdminJSON {
    id: number,
    uuid: string,
    roleId: number,
    name: string,
    username: string,
    password: string,
    status: number,
    createdBy: number,
    updatedBy: number
}

interface AdminQueryJSON {
    uuid: string;
    roleId: number;
    name: string;
    username: string;
    status: number;
    createdAt: Date;
  }

export class AdminDomain {
    protected id: number
    protected uuid: string
    protected roleId: number
    protected name: string
    protected username: string
    protected password: string
    protected status: number
    protected createdBy: number
    protected updatedBy: number
    protected createdAt: Date;

    register(data: AdminRegistration): void {
        this.uuid = data.uuid
        this.roleId = data.roleId
        this.name = data.name
        this.username = data.username
        this.password = data.password
        this.status = data.status
        this.createdBy = data.createdBy
        this.updatedBy = data.updatedBy
    }

    fromJSON(data: AdminQueryJSON): void {
        this.uuid = data.uuid;
        this.roleId = data.roleId;
        this.name = data.name;
        this.username = data.username;
        this.status = data.status;
        this.createdAt = data.createdAt;
    }

    toJson(): AdminJSON {
        return {
            id: this.id,
            uuid: this.uuid,
            roleId: this.roleId,
            name: this.name,
            username: this.username,
            password: this.password,
            status: this.status,
            createdBy: this.createdBy,
            updatedBy: this.updatedBy
        }
    }

    toListJSON(): AdminQueryJSON {
        return {
          uuid: this.uuid,
          roleId: this.roleId,
          name: this.name,
          username: this.username,
          status: this.status,
          createdAt: this.createdAt,
        };
      }
}