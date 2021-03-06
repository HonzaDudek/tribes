import { TestBed } from '@angular/core/testing';
import { BuildingsService } from './buildings.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Building } from '../../_models/building.model';
import { mockLocalStorage, store} from '../../_utilities/authTesting.utilities';
import { NotificationFactory } from '../../_helpers/factories/notification.factory';

describe('BuildingsService', () => {
  let service: BuildingsService;
  const mockStore = store;
  const mockStorage = mockLocalStorage;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        BuildingsService,
        NotificationFactory,
      ],
    });

    spyOn(localStorage, 'getItem')
      .and.callFake(mockStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockStorage.clear);
  });

  beforeEach(() => {
    service = TestBed.get(BuildingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of buildings from the database', () => {
    const buildings: Building[] = [];
    service.getBuildingsFromBackend().subscribe((response) => {
      buildings.push(response.body);
      expect(buildings[0]).toEqual(
        {
          id: 123,
          type: 'townhall',
          level: 1,
          hp: 100,
          startedAt: 1231232312,
          finishedAt: 7652146122,
        });
      expect(localStorage.getItem('buildings').length).toEqual(4);
    });
  });

  it('Should create a new building', () => {
    let building: Building;
    service.createBuilding('mine').subscribe((response) => {
      building = response;
      expect(building.type).not.toBe(null);
    });
  });

  it('When new building was created, unfinishedBuildings should not be null ', () => {
    service.createBuilding('mine');
    let building;
    service.filterBuildings('unfinished')
      .subscribe(response => {
        building = response;
        expect(building.type).toBe('mine');
      });

  });
});
