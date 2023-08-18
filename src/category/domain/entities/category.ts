import { UniqueEntityId } from '../../../@seedwork/domain/value-objects/unique-entity-id';

export type CategoryProperties = {
  name: string;
  description?: string;
  isActive?: boolean;
  createdAt?: Date;
};
export class Category {
  public readonly id: UniqueEntityId;

  constructor(public readonly props: CategoryProperties, id?: UniqueEntityId) {
    this.id = id || new UniqueEntityId();
    this.description = this.props.description;
    this.isActive = this.props.isActive ?? true;
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

  private set createdAt(date: Date) {
    this.props.createdAt = date ?? new Date();
  }
}
