import { v4 as uuidV4 } from 'uuid';

export type CategoryProperties = {
  name: string;
  description?: string;
  isActive?: boolean;
  createdAt?: Date;
};
export class Category {
  public readonly id: string;
  
  constructor(public readonly props: CategoryProperties, id?: string) {
    this.id = id || uuidV4();
    this.description = this.props.description;
    this.props.isActive = this.props.isActive ?? true;
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  private set description(description: string) {
    this.props.description = description ?? null;
  }

  get isActive() {
    return this.props.isActive;
  }

  private set isActive(isActive: boolean) {
    this.props.isActive = isActive ?? true;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}
