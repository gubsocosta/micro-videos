import { omit } from 'lodash';
import { UniqueEntityId } from '../../../@seedwork/domain/value-objects/unique-entity-id';
import { Category, CategoryProperties } from './category';

describe('Category Unit Tests', () => {
  it('category constructor', () => {
    let category: Category = new Category({ name: 'movie' });
    const props = omit(category.props, 'createdAt');
    expect(props).toStrictEqual({
      name: 'movie',
      description: null,
      isActive: true,
    });
    expect(category.props.createdAt).toBeInstanceOf(Date);

    const createdAt = new Date();
    category = new Category({
      name: 'movie',
      description: 'foo',
      isActive: false,
      createdAt,
    });
    expect(category.props).toStrictEqual({
      name: 'movie',
      description: 'foo',
      isActive: false,
      createdAt,
    });

    category = new Category({
      name: 'movie',
      description: 'bar',
    });
    expect(category.props).toMatchObject({
      name: 'movie',
      description: 'bar',
    });

    category = new Category({
      name: 'movie',
      isActive: false,
    });
    expect(category.props).toMatchObject({
      name: 'movie',
      isActive: false,
    });

    category = new Category({
      name: 'movie',
      createdAt,
    });
    expect(category.props).toMatchObject({
      name: 'movie',
      createdAt,
    });
  });

  it('id prop', () => {
    type Param = {
      props: CategoryProperties;
      id?: string;
    };
    const paramList: Param[] = [
      { props: { name: 'movie' } },
      { props: { name: 'movie' }, id: null },
      { props: { name: 'movie' }, id: undefined },
      { props: { name: 'movie' }, id: 'd864fb68-1473-44fa-bd33-93b3085e2dd5' },
    ];

    paramList.forEach((param) => {
      const category = new Category(param.props, new UniqueEntityId(param.id));
      expect(category.id).toBeInstanceOf(UniqueEntityId);
    });
  });

  it('getter of name prop', () => {
    const category = new Category({ name: 'movie' });
    expect(category.name).toBe('movie');
  });

  it('getter and setter of description prop', () => {
    let category: Category = new Category({ name: 'movie' });
    expect(category.description).toBeNull();

    category = new Category({ name: 'movie', description: 'foo' });
    expect(category.description).toBe('foo');

    category = new Category({ name: 'movie' });
    category['description'] = 'bar';
    expect(category.description).toBe('bar');

    category = new Category({ name: 'movie' });
    category['description'] = undefined;
    expect(category.description).toBeNull();

    category = new Category({ name: 'movie' });
    category['description'] = null;
    expect(category.description).toBeNull();
  });

  it('getter and setter of isActive prop', () => {
    let category: Category = new Category({ name: 'movie' });
    expect(category.isActive).toBeTruthy();

    category = new Category({ name: 'movie', isActive: true });
    expect(category.isActive).toBeTruthy();

    category = new Category({ name: 'movie', isActive: false });
    expect(category.isActive).toBeFalsy();
  });

  it('getter and setter of createdAt prop', () => {
    let category: Category = new Category({ name: 'movie' });
    expect(category.createdAt).toBeInstanceOf(Date);

    const createdAt = new Date();
    category = new Category({ name: 'movie', createdAt });
    expect(category.createdAt).toBe(createdAt);
  });
});
