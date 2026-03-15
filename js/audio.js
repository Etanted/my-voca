/**
 * audio.js — 발음 듣기 기능 (Web Speech API)
 * VOCA 영어완전정복 단어장
 */

const Audio = (() => {
  let currentUtterance = null;
  let isSpeaking = false;

  /** Web Speech API 지원 여부 확인 */
  function isSupported() {
    return 'speechSynthesis' in window;
  }

  /** 현재 재생 중인 음성 중단 */
  function stop() {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
    }
  }

  /**
   * 단어 발음 재생
   * @param {string} word  발음할 단어 또는 문장
   * @param {string} [lang='en-US']  언어 코드
   * @param {Function} [onStart]  재생 시작 콜백
   * @param {Function} [onEnd]    재생 종료 콜백
   */
  function speak(word, lang = 'en-US', onStart, onEnd) {
    if (!isSupported()) {
      alert('이 브라우저는 발음 듣기 기능을 지원하지 않습니다.\nChrome 또는 Edge 브라우저를 사용해 주세요.');
      return;
    }

    stop();

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = lang;
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // 영어 음성 우선 선택
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && v.localService) ||
                    voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utterance.voice = enVoice;

    utterance.onstart = () => {
      isSpeaking = true;
      if (typeof onStart === 'function') onStart();
    };

    utterance.onend = () => {
      isSpeaking = false;
      if (typeof onEnd === 'function') onEnd();
    };

    utterance.onerror = () => {
      isSpeaking = false;
      if (typeof onEnd === 'function') onEnd();
    };

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  /**
   * 단어와 예문을 순서대로 재생
   * @param {string} word
   * @param {string} example
   * @param {Function} [onStart]
   * @param {Function} [onEnd]
   */
  function speakWithExample(word, example, onStart, onEnd) {
    if (!isSupported()) return;
    stop();

    if (typeof onStart === 'function') onStart();

    const wordUtt = new SpeechSynthesisUtterance(word);
    wordUtt.lang = 'en-US';
    wordUtt.rate = 0.75;

    const pauseUtt = new SpeechSynthesisUtterance('.');
    pauseUtt.lang = 'en-US';
    pauseUtt.volume = 0;

    const exUtt = new SpeechSynthesisUtterance(example);
    exUtt.lang = 'en-US';
    exUtt.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && v.localService) ||
                    voices.find(v => v.lang.startsWith('en'));
    if (enVoice) { wordUtt.voice = enVoice; exUtt.voice = enVoice; }

    exUtt.onend = () => {
      isSpeaking = false;
      if (typeof onEnd === 'function') onEnd();
    };
    exUtt.onerror = () => {
      isSpeaking = false;
      if (typeof onEnd === 'function') onEnd();
    };

    isSpeaking = true;
    window.speechSynthesis.speak(wordUtt);
    window.speechSynthesis.speak(pauseUtt);
    window.speechSynthesis.speak(exUtt);
  }

  /** 음성 목록 로드 (비동기) */
  function loadVoices() {
    return new Promise(resolve => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) { resolve(voices); return; }
      window.speechSynthesis.onvoiceschanged = () => {
        resolve(window.speechSynthesis.getVoices());
      };
    });
  }

  return { isSupported, speak, speakWithExample, stop, loadVoices };
})();
