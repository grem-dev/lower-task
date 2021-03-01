import { Result } from "../../../shared/core/Result";
import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { EntityId } from "../../../shared/domain/EntityId";
import { WorkspaceCollection } from "./Collections";
import { SpaceProps } from "./types";

export class Space extends AggregateRoot<SpaceProps> {
  get _name(): string {
    return this.props._name;
  }

  get owner(): EntityId {
    return this.owner;
  }

  get workspaces(): WorkspaceCollection {
    return this.props.workspaces;
  }

  get id(): EntityId {
    return this._id;
  }

  private constructor(props: SpaceProps, id?: EntityId) {
    super(props, id);
  }

  public static create(props: SpaceProps, id?: EntityId): Result<Space> {
    const finalProps: SpaceProps = { ...props };
    return Result.ok(new Space(finalProps));
  }
}