import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2flowerAppComponent } from '../app/ng2flower.component';

beforeEachProviders(() => [Ng2flowerAppComponent]);

describe('App: Ng2flower', () => {
  it('should create the app',
      inject([Ng2flowerAppComponent], (app: Ng2flowerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2flower works!\'',
      inject([Ng2flowerAppComponent], (app: Ng2flowerAppComponent) => {
    expect(app.title).toEqual('ng2flower works!');
  }));
});
