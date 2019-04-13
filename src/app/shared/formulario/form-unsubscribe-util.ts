import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class FormularioUnsubscribeUtil implements OnDestroy {

    /**
    * Subject para controle dos unsubscribes.
    */
   protected unsubscribe: Subject<void> = new Subject();

   /**
    * Construtor.
    */
   constructor() {}

   /**
    * Chamado ao destruir o componente.
    */
   ngOnDestroy() {
       this.unsubscribe.next();
       this.unsubscribe.complete();
   }
}