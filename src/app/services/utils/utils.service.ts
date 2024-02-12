import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  messageSnackBar={
    editIsSuccess: '¡Registro actualizado con éxito!',
    deleteIsSuccess: '¡Registro eliminado con éxito!',
    addIsSuccess: '¡Registro agregado con éxito!',
    editError: '¡Error al modificar este registro, intente nuevamente!',
    deleteError: '¡Error al Eliminar este registro, intente nuevamente!',
    addError: '¡Error al egregar un nuevo registro, intente nuevamente!',
    error: '¡ha ocurrido un Error, intente nuevamente!'
  }
}