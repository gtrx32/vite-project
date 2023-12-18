import MainContainer from '../../components/MainContainer';
import Game from '../../components/Game';
import { useEffect } from 'react';
import '../../widget.css'

const GamePage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    const section = document.getElementById('script');
    script.setAttribute('data-b24-form', 'inline/50/e6n5st');
    script.setAttribute('data-skip-moving', 'true');
    script.insertAdjacentHTML(
      'afterbegin',
      `cackle_widget = window.cackle_widget || [];
    cackle_widget.push({widget: 'Review', id: 80935});
    (function() {
        var mc = document.createElement('script');
        mc.type = 'text/javascript';
        mc.async = true;
        mc.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cackle.me/widget.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling);
    })();`
    );
    section?.appendChild(script);
  }, []);

  return (
    <MainContainer>
      <div id='script'></div>
      <a id='mc-link' href='https://cackle.me' style={{ opacity: 0, visibility: 'hidden', height: '0px' }}>
        Отзывы для сайта <b>Cackl</b>
        <b>e</b>
      </a>
      <Game />
      <h2 id='reviewstitle'>Отзывы</h2>
      <div id='mc-review'></div>
    </MainContainer>
  );
};

export default GamePage;
