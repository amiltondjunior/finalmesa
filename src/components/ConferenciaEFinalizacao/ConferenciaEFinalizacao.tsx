import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './ConferenciaEFinalizacao.module.css';

interface Props {
  className?: string;
}
/* @figmaId 94:7 */
export const ConferenciaEFinalizacao: FC<Props> = memo(function ConferenciaEFinalizacao(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes._352020ArrowBack1}></div>
      <div className={classes.finalizacaoDaMesa1}>Finalização da Mesa 01</div>
      <div className={classes.r350}>R$ 35,00</div>
      <div className={classes.total}>Total</div>
      <div className={classes.rectangle13}></div>
      <div className={classes.desejaRealmenteFinalizarEssaMe}>
        <div className={classes.textBlock}>Deseja realmente finalizar</div>
        <div className={classes.textBlock2}>essa mesa/comanda?</div>
      </div>
      <div className={classes.rectangle14}></div>
      <div className={classes.nao}>Não</div>
      <div className={classes.rectangle142}></div>
      <div className={classes.sim}>Sim</div>
      <div className={classes.rectangle6}></div>
      <div className={classes.cocaCola}>Coca-Cola</div>
      <div className={classes.line2}></div>
      <div className={classes.r550}>R$ 5,50</div>
      <div className={classes.rectangle62}></div>
      <div className={classes.xBacon}>X-Bacon</div>
      <div className={classes.line22}></div>
      <div className={classes.r140}>R$ 14,00</div>
      <div className={classes.rectangle63}></div>
      <div className={classes.xCalabresaEBacon}>X-Calabresa e Bacon</div>
      <div className={classes.line23}></div>
      <div className={classes.r1550}>R$ 15,50</div>
    </div>
  );
});
