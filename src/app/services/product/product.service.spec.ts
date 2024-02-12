import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

describe('ProductService', () => {
  let service: ProductService;
  const mockHttpServices = {
    getProducts: jest.fn(),
    createProduct: jest.fn(),
    updateProduct: jest.fn(),
    deleteProduct: jest.fn(),
    verifyId: jest.fn(),
  }
  const headers = {
    "authorId": "89"
  } 

  const mockProduct = {
    id: "Johanny70",
    name: "Visa Infinite Crédito 2",
    description: "Esta tarjeta es test",
    logo: "https://www.visa.co.ve/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-infinite-400x225.jpg",
    date_release: "2023-11-17T00:00:00.000+00:00",
    date_revision: "2024-11-17T00:00:00.000+00:00"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ProductService,
        {provide: HttpClientModule, useValue: mockHttpServices}
      ]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#headers should be defined', ()=>{
    service.headers = headers;
    expect(service.headers).toEqual(headers)
  })

  it('options should be defined', ()=> {
    const mockOptions = {headers: new HttpHeaders({...headers})};
    service.options = mockOptions;
    expect(service.options).toEqual(mockOptions);
  })

  it('should call #getProducts()', ()=> {
    mockHttpServices.getProducts.mockReturnValue(of([]));
    service.getProducts().subscribe((resp) => {
      expect(resp).toEqual([]);
    })
  })

  it('should call #createProduct()', ()=> {
    mockHttpServices.createProduct.mockReturnValue(of({}));
    service.createProduct(mockProduct).subscribe((resp) => {
      expect(resp).toEqual({});
    })
  })

  it('should call #updateProduct()', ()=> {
    mockHttpServices.updateProduct.mockReturnValue(of({}));
    service.updateProduct(mockProduct).subscribe((resp) => {
      expect(resp).toEqual({});
    })
  })

  it('should call #deleteProduct()', ()=> {
    mockHttpServices.deleteProduct.mockReturnValue(of(''));
    service.deleteProduct(mockProduct).subscribe((resp) => {
      expect(resp).toEqual('');
    })
  })

  it('should call #verifyId()', ()=> {
    mockHttpServices.verifyId.mockReturnValue(of(false));
    service.verifyId(mockProduct.id).subscribe((resp) => {
      expect(resp).toEqual(false);
    })
  })
});