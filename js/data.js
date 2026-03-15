/**
 * data.js — VOCA 6000 단어 데이터
 * 고3 / 대학 수준 생활영어 단어 및 숙어
 * Day 1 ~ Day 10 (총 200단어 수록, 나머지 Day는 동일 패턴으로 확장)
 *
 * 구조:
 *  VOCA_DATA[day] = {
 *    theme: "테마명",
 *    words: [
 *      { word, pron, pos, meanings: [...], example, exampleKr }
 *    ]
 *  }
 */

const VOCA_DATA = {

  1: {
    theme: "핵심 동사 I",
    words: [
      { word: "achieve", pron: "/əˈtʃiːv/", pos: "v.", meanings: ["달성하다", "성취하다"], example: "She worked hard to achieve her goals.", exampleKr: "그녀는 목표를 달성하기 위해 열심히 노력했다." },
      { word: "adapt", pron: "/əˈdæpt/", pos: "v.", meanings: ["적응하다", "조정하다"], example: "It takes time to adapt to a new environment.", exampleKr: "새로운 환경에 적응하는 데는 시간이 걸린다." },
      { word: "advance", pron: "/ədˈvæns/", pos: "v./n.", meanings: ["발전하다", "진전", "전진"], example: "Technology continues to advance rapidly.", exampleKr: "기술은 계속해서 빠르게 발전하고 있다." },
      { word: "allocate", pron: "/ˈæləkeɪt/", pos: "v.", meanings: ["할당하다", "배분하다"], example: "The company allocated a budget for new projects.", exampleKr: "회사는 새 프로젝트에 예산을 할당했다." },
      { word: "analyze", pron: "/ˈænəlaɪz/", pos: "v.", meanings: ["분석하다"], example: "We need to analyze the data carefully.", exampleKr: "우리는 데이터를 신중하게 분석해야 한다." },
      { word: "anticipate", pron: "/ænˈtɪsɪpeɪt/", pos: "v.", meanings: ["예상하다", "기대하다"], example: "I didn't anticipate such a positive response.", exampleKr: "나는 그런 긍정적인 반응을 예상하지 못했다." },
      { word: "apply", pron: "/əˈplaɪ/", pos: "v.", meanings: ["적용하다", "지원하다", "신청하다"], example: "You should apply for the scholarship.", exampleKr: "너는 장학금을 신청해야 한다." },
      { word: "assess", pron: "/əˈses/", pos: "v.", meanings: ["평가하다", "사정하다"], example: "The teacher assessed the students' progress.", exampleKr: "선생님은 학생들의 진도를 평가했다." },
      { word: "assume", pron: "/əˈsjuːm/", pos: "v.", meanings: ["가정하다", "추정하다", "떠맡다"], example: "Don't assume that everyone agrees with you.", exampleKr: "모든 사람이 너와 동의한다고 가정하지 마라." },
      { word: "attract", pron: "/əˈtrækt/", pos: "v.", meanings: ["끌다", "매혹하다", "유인하다"], example: "The new exhibit attracted thousands of visitors.", exampleKr: "새 전시회는 수천 명의 방문객을 끌어들였다." },
      { word: "benefit", pron: "/ˈbenɪfɪt/", pos: "v./n.", meanings: ["혜택을 받다", "이득", "혜택"], example: "Exercise benefits both the body and mind.", exampleKr: "운동은 신체와 정신 모두에 이롭다." },
      { word: "challenge", pron: "/ˈtʃælɪndʒ/", pos: "n./v.", meanings: ["도전", "어려움", "도전하다"], example: "Learning a new language is a real challenge.", exampleKr: "새로운 언어를 배우는 것은 진정한 도전이다." },
      { word: "communicate", pron: "/kəˈmjuːnɪkeɪt/", pos: "v.", meanings: ["소통하다", "전달하다"], example: "It's important to communicate clearly at work.", exampleKr: "직장에서 명확하게 소통하는 것이 중요하다." },
      { word: "compete", pron: "/kəmˈpiːt/", pos: "v.", meanings: ["경쟁하다"], example: "Local businesses compete with online stores.", exampleKr: "지역 사업체들은 온라인 상점과 경쟁한다." },
      { word: "concentrate", pron: "/ˈkɒnsntreɪt/", pos: "v.", meanings: ["집중하다", "농축하다"], example: "Try to concentrate on the task at hand.", exampleKr: "당면한 과제에 집중하도록 노력하라." },
      { word: "confirm", pron: "/kənˈfɜːrm/", pos: "v.", meanings: ["확인하다", "확정하다"], example: "Please confirm your reservation by email.", exampleKr: "이메일로 예약을 확인해 주세요." },
      { word: "consider", pron: "/kənˈsɪdər/", pos: "v.", meanings: ["고려하다", "생각하다", "여기다"], example: "Consider all options before making a decision.", exampleKr: "결정을 내리기 전에 모든 선택지를 고려하라." },
      { word: "contribute", pron: "/kənˈtrɪbjuːt/", pos: "v.", meanings: ["기여하다", "공헌하다", "기부하다"], example: "Everyone can contribute to the community.", exampleKr: "모든 사람이 지역 사회에 기여할 수 있다." },
      { word: "create", pron: "/kriˈeɪt/", pos: "v.", meanings: ["창조하다", "만들다", "생성하다"], example: "The artist created a beautiful sculpture.", exampleKr: "그 예술가는 아름다운 조각품을 만들었다." },
      { word: "define", pron: "/dɪˈfaɪn/", pos: "v.", meanings: ["정의하다", "규정하다", "명확히 하다"], example: "Can you define what success means to you?", exampleKr: "당신에게 성공이 무엇을 의미하는지 정의할 수 있나요?" }
    ]
  },

  2: {
    theme: "핵심 동사 II",
    words: [
      { word: "demonstrate", pron: "/ˈdemənstreɪt/", pos: "v.", meanings: ["보여주다", "시범을 보이다", "증명하다"], example: "She demonstrated how to use the new software.", exampleKr: "그녀는 새 소프트웨어 사용법을 시범 보였다." },
      { word: "develop", pron: "/dɪˈveləp/", pos: "v.", meanings: ["개발하다", "발전시키다", "성장하다"], example: "The team is developing a new mobile app.", exampleKr: "팀은 새로운 모바일 앱을 개발하고 있다." },
      { word: "discover", pron: "/dɪˈskʌvər/", pos: "v.", meanings: ["발견하다", "알아내다"], example: "Scientists discovered a new species of fish.", exampleKr: "과학자들이 새로운 어종을 발견했다." },
      { word: "discuss", pron: "/dɪˈskʌs/", pos: "v.", meanings: ["논의하다", "토론하다"], example: "Let's discuss the plan in more detail.", exampleKr: "계획을 더 자세히 논의해 봅시다." },
      { word: "display", pron: "/dɪˈspleɪ/", pos: "v./n.", meanings: ["전시하다", "표시하다", "진열"], example: "The museum displays ancient artifacts.", exampleKr: "그 박물관은 고대 유물을 전시하고 있다." },
      { word: "enable", pron: "/ɪˈneɪbl/", pos: "v.", meanings: ["가능하게 하다", "허용하다"], example: "Technology enables us to work from home.", exampleKr: "기술은 우리가 집에서 일할 수 있게 해준다." },
      { word: "encourage", pron: "/ɪnˈkʌrɪdʒ/", pos: "v.", meanings: ["격려하다", "장려하다"], example: "Parents should encourage their children to read.", exampleKr: "부모는 자녀가 독서하도록 격려해야 한다." },
      { word: "establish", pron: "/ɪˈstæblɪʃ/", pos: "v.", meanings: ["설립하다", "수립하다", "확립하다"], example: "The company was established in 1995.", exampleKr: "그 회사는 1995년에 설립되었다." },
      { word: "evaluate", pron: "/ɪˈvæljueɪt/", pos: "v.", meanings: ["평가하다", "판단하다"], example: "We need to evaluate the risks carefully.", exampleKr: "우리는 위험을 신중하게 평가해야 한다." },
      { word: "expand", pron: "/ɪkˈspænd/", pos: "v.", meanings: ["확장하다", "확대하다", "발전하다"], example: "The business plans to expand overseas.", exampleKr: "그 기업은 해외 진출을 계획하고 있다." },
      { word: "explore", pron: "/ɪkˈsplɔːr/", pos: "v.", meanings: ["탐험하다", "탐구하다", "살펴보다"], example: "They explored the ancient ruins.", exampleKr: "그들은 고대 유적지를 탐험했다." },
      { word: "express", pron: "/ɪkˈspres/", pos: "v.", meanings: ["표현하다", "나타내다"], example: "It's important to express your feelings.", exampleKr: "자신의 감정을 표현하는 것이 중요하다." },
      { word: "focus", pron: "/ˈfoʊkəs/", pos: "v./n.", meanings: ["집중하다", "초점", "중심"], example: "You need to focus on your studies.", exampleKr: "너는 공부에 집중해야 한다." },
      { word: "generate", pron: "/ˈdʒenəreɪt/", pos: "v.", meanings: ["생성하다", "발생시키다", "창출하다"], example: "Solar panels generate clean energy.", exampleKr: "태양 전지판은 청정 에너지를 생성한다." },
      { word: "identify", pron: "/aɪˈdentɪfaɪ/", pos: "v.", meanings: ["확인하다", "파악하다", "식별하다"], example: "Can you identify the problem?", exampleKr: "문제를 파악할 수 있나요?" },
      { word: "implement", pron: "/ˈɪmplɪment/", pos: "v.", meanings: ["실행하다", "이행하다", "도입하다"], example: "The school implemented a new curriculum.", exampleKr: "학교는 새 교육과정을 도입했다." },
      { word: "improve", pron: "/ɪmˈpruːv/", pos: "v.", meanings: ["개선하다", "향상하다", "나아지다"], example: "Regular practice improves your skills.", exampleKr: "규칙적인 연습이 기술을 향상시킨다." },
      { word: "indicate", pron: "/ˈɪndɪkeɪt/", pos: "v.", meanings: ["나타내다", "가리키다", "시사하다"], example: "The survey indicates a shift in consumer behavior.", exampleKr: "설문 조사는 소비자 행동의 변화를 나타낸다." },
      { word: "influence", pron: "/ˈɪnfluəns/", pos: "v./n.", meanings: ["영향을 미치다", "영향력"], example: "Social media influences public opinion.", exampleKr: "소셜 미디어는 여론에 영향을 미친다." },
      { word: "involve", pron: "/ɪnˈvɒlv/", pos: "v.", meanings: ["포함하다", "관련시키다"], example: "The project involves a lot of teamwork.", exampleKr: "그 프로젝트는 많은 팀워크를 필요로 한다." }
    ]
  },

  3: {
    theme: "핵심 형용사 I",
    words: [
      { word: "abstract", pron: "/ˈæbstrækt/", pos: "adj.", meanings: ["추상적인", "관념적인"], example: "The painting was very abstract and hard to interpret.", exampleKr: "그 그림은 매우 추상적이어서 해석하기 어려웠다." },
      { word: "accurate", pron: "/ˈækjərət/", pos: "adj.", meanings: ["정확한", "정밀한"], example: "The weather forecast was accurate.", exampleKr: "일기 예보가 정확했다." },
      { word: "adequate", pron: "/ˈædɪkwət/", pos: "adj.", meanings: ["충분한", "적절한"], example: "Make sure you get adequate sleep every night.", exampleKr: "매일 밤 충분한 수면을 취하도록 하라." },
      { word: "aggressive", pron: "/əˈɡresɪv/", pos: "adj.", meanings: ["공격적인", "적극적인", "강력한"], example: "The company launched an aggressive marketing campaign.", exampleKr: "회사는 공격적인 마케팅 캠페인을 시작했다." },
      { word: "ambitious", pron: "/æmˈbɪʃəs/", pos: "adj.", meanings: ["야심찬", "의욕적인"], example: "She is an ambitious young professional.", exampleKr: "그녀는 야심찬 젊은 전문가이다." },
      { word: "anxious", pron: "/ˈæŋkʃəs/", pos: "adj.", meanings: ["불안한", "걱정하는", "간절히 원하는"], example: "He felt anxious before the interview.", exampleKr: "그는 면접 전에 불안함을 느꼈다." },
      { word: "appropriate", pron: "/əˈproʊpriət/", pos: "adj.", meanings: ["적절한", "알맞은"], example: "Wear appropriate clothing for the occasion.", exampleKr: "상황에 맞는 적절한 복장을 입어라." },
      { word: "available", pron: "/əˈveɪləbl/", pos: "adj.", meanings: ["이용 가능한", "구할 수 있는"], example: "The doctor is available on Monday.", exampleKr: "의사는 월요일에 만날 수 있다." },
      { word: "beneficial", pron: "/ˌbenɪˈfɪʃəl/", pos: "adj.", meanings: ["유익한", "이로운"], example: "Exercise is beneficial to your health.", exampleKr: "운동은 건강에 이롭다." },
      { word: "capable", pron: "/ˈkeɪpəbl/", pos: "adj.", meanings: ["유능한", "능력 있는", "할 수 있는"], example: "She is capable of handling any situation.", exampleKr: "그녀는 어떤 상황도 처리할 능력이 있다." },
      { word: "certain", pron: "/ˈsɜːrtn/", pos: "adj.", meanings: ["확실한", "특정한", "어떤"], example: "I'm certain that he will succeed.", exampleKr: "나는 그가 성공할 것이라고 확신한다." },
      { word: "comprehensive", pron: "/ˌkɒmprɪˈhensɪv/", pos: "adj.", meanings: ["포괄적인", "종합적인"], example: "The report provides a comprehensive overview.", exampleKr: "그 보고서는 포괄적인 개요를 제공한다." },
      { word: "conscious", pron: "/ˈkɒnʃəs/", pos: "adj.", meanings: ["의식하는", "자각하는", "의식이 있는"], example: "Be conscious of the impact of your words.", exampleKr: "당신의 말이 미치는 영향을 의식하라." },
      { word: "consistent", pron: "/kənˈsɪstənt/", pos: "adj.", meanings: ["일관된", "한결같은"], example: "Consistent effort leads to long-term success.", exampleKr: "일관된 노력이 장기적인 성공으로 이어진다." },
      { word: "convenient", pron: "/kənˈviːniənt/", pos: "adj.", meanings: ["편리한", "간편한"], example: "Online shopping is very convenient.", exampleKr: "온라인 쇼핑은 매우 편리하다." },
      { word: "creative", pron: "/kriˈeɪtɪv/", pos: "adj.", meanings: ["창의적인", "독창적인"], example: "We need a creative solution to this problem.", exampleKr: "이 문제에 대한 창의적인 해결책이 필요하다." },
      { word: "critical", pron: "/ˈkrɪtɪkəl/", pos: "adj.", meanings: ["비판적인", "중요한", "위태로운"], example: "Critical thinking is an essential skill.", exampleKr: "비판적 사고는 필수적인 기술이다." },
      { word: "curious", pron: "/ˈkjʊəriəs/", pos: "adj.", meanings: ["호기심 많은", "궁금한"], example: "Children are naturally curious about the world.", exampleKr: "아이들은 세상에 대해 자연스럽게 호기심이 많다." },
      { word: "dedicated", pron: "/ˈdedɪkeɪtɪd/", pos: "adj.", meanings: ["전념하는", "헌신적인", "전용의"], example: "She is a dedicated teacher who inspires students.", exampleKr: "그녀는 학생들에게 영감을 주는 헌신적인 선생님이다." },
      { word: "diverse", pron: "/daɪˈvɜːrs/", pos: "adj.", meanings: ["다양한", "다채로운"], example: "The city has a diverse population.", exampleKr: "그 도시는 다양한 인구 구성을 가지고 있다." }
    ]
  },

  4: {
    theme: "핵심 형용사 II",
    words: [
      { word: "dynamic", pron: "/daɪˈnæmɪk/", pos: "adj.", meanings: ["역동적인", "활발한", "동태적인"], example: "She has a dynamic personality.", exampleKr: "그녀는 역동적인 성격을 가지고 있다." },
      { word: "efficient", pron: "/ɪˈfɪʃənt/", pos: "adj.", meanings: ["효율적인", "능률적인"], example: "An efficient system saves time and money.", exampleKr: "효율적인 시스템은 시간과 돈을 절약한다." },
      { word: "essential", pron: "/ɪˈsenʃəl/", pos: "adj.", meanings: ["필수적인", "본질적인"], example: "Water is essential for all living things.", exampleKr: "물은 모든 생명체에 필수적이다." },
      { word: "evident", pron: "/ˈevɪdənt/", pos: "adj.", meanings: ["명백한", "분명한"], example: "It was evident that she was nervous.", exampleKr: "그녀가 긴장하고 있다는 것이 명백했다." },
      { word: "exclusive", pron: "/ɪkˈskluːsɪv/", pos: "adj.", meanings: ["독점적인", "배타적인", "고급의"], example: "The club has exclusive membership benefits.", exampleKr: "그 클럽은 독점적인 회원 혜택을 제공한다." },
      { word: "flexible", pron: "/ˈfleksɪbl/", pos: "adj.", meanings: ["유연한", "융통성 있는"], example: "We offer flexible working hours.", exampleKr: "우리는 유연한 근무 시간을 제공한다." },
      { word: "fundamental", pron: "/ˌfʌndəˈmentəl/", pos: "adj.", meanings: ["근본적인", "기본적인"], example: "Trust is fundamental to any relationship.", exampleKr: "신뢰는 모든 관계의 근본이다." },
      { word: "genuine", pron: "/ˈdʒenjuɪn/", pos: "adj.", meanings: ["진짜의", "진정한", "진심의"], example: "His concern for others seemed genuine.", exampleKr: "그의 타인에 대한 관심은 진심으로 보였다." },
      { word: "global", pron: "/ˈɡloʊbəl/", pos: "adj.", meanings: ["세계적인", "전반적인"], example: "Climate change is a global issue.", exampleKr: "기후 변화는 세계적인 문제이다." },
      { word: "gradual", pron: "/ˈɡrædʒuəl/", pos: "adj.", meanings: ["점진적인", "서서히 이루어지는"], example: "There has been a gradual improvement in her health.", exampleKr: "그녀의 건강이 점진적으로 나아졌다." },
      { word: "ideal", pron: "/aɪˈdiːəl/", pos: "adj.", meanings: ["이상적인", "완벽한"], example: "This is the ideal time to invest.", exampleKr: "지금이 투자하기에 이상적인 시기이다." },
      { word: "immediate", pron: "/ɪˈmiːdiət/", pos: "adj.", meanings: ["즉각적인", "직접적인"], example: "The accident required immediate medical attention.", exampleKr: "그 사고는 즉각적인 의료 처치가 필요했다." },
      { word: "independent", pron: "/ˌɪndɪˈpendənt/", pos: "adj.", meanings: ["독립적인", "자립하는"], example: "She became financially independent at 25.", exampleKr: "그녀는 25세에 경제적으로 독립했다." },
      { word: "inevitable", pron: "/ɪnˈevɪtəbl/", pos: "adj.", meanings: ["불가피한", "피할 수 없는"], example: "Change is inevitable in life.", exampleKr: "변화는 인생에서 불가피하다." },
      { word: "innovative", pron: "/ˈɪnəveɪtɪv/", pos: "adj.", meanings: ["혁신적인", "창의적인"], example: "The company is known for its innovative products.", exampleKr: "그 회사는 혁신적인 제품으로 유명하다." },
      { word: "intense", pron: "/ɪnˈtens/", pos: "adj.", meanings: ["강렬한", "극심한", "열정적인"], example: "The competition was intense.", exampleKr: "경쟁이 치열했다." },
      { word: "logical", pron: "/ˈlɒdʒɪkəl/", pos: "adj.", meanings: ["논리적인", "합리적인"], example: "His argument was clear and logical.", exampleKr: "그의 주장은 명확하고 논리적이었다." },
      { word: "motivated", pron: "/ˈmoʊtɪveɪtɪd/", pos: "adj.", meanings: ["의욕 있는", "동기 부여된"], example: "Stay motivated even when things get tough.", exampleKr: "힘들더라도 의욕을 잃지 마라." },
      { word: "neutral", pron: "/ˈnjuːtrəl/", pos: "adj.", meanings: ["중립적인", "중간의", "무색의"], example: "The mediator remained neutral throughout.", exampleKr: "중재자는 내내 중립을 유지했다." },
      { word: "obvious", pron: "/ˈɒbviəs/", pos: "adj.", meanings: ["명백한", "분명한", "당연한"], example: "The answer was obvious to everyone.", exampleKr: "답은 모든 사람에게 명백했다." }
    ]
  },

  5: {
    theme: "핵심 명사 I",
    words: [
      { word: "achievement", pron: "/əˈtʃiːvmənt/", pos: "n.", meanings: ["성취", "업적", "달성"], example: "Winning the award was a great achievement.", exampleKr: "그 상을 받은 것은 대단한 성취였다." },
      { word: "advantage", pron: "/ədˈvɑːntɪdʒ/", pos: "n.", meanings: ["이점", "유리함", "장점"], example: "Speaking two languages is a big advantage.", exampleKr: "두 언어를 구사하는 것은 큰 이점이다." },
      { word: "approach", pron: "/əˈproʊtʃ/", pos: "n./v.", meanings: ["접근법", "방법", "접근하다"], example: "We need a different approach to solve this.", exampleKr: "이것을 해결하려면 다른 접근법이 필요하다." },
      { word: "aspect", pron: "/ˈæspekt/", pos: "n.", meanings: ["측면", "양상", "관점"], example: "Consider every aspect of the situation.", exampleKr: "상황의 모든 측면을 고려하라." },
      { word: "atmosphere", pron: "/ˈætməsfɪər/", pos: "n.", meanings: ["분위기", "대기", "환경"], example: "The restaurant has a cozy atmosphere.", exampleKr: "그 식당은 아늑한 분위기를 가지고 있다." },
      { word: "attitude", pron: "/ˈætɪtjuːd/", pos: "n.", meanings: ["태도", "자세", "마음가짐"], example: "A positive attitude can change your life.", exampleKr: "긍정적인 태도는 삶을 바꿀 수 있다." },
      { word: "authority", pron: "/ɔːˈθɒrɪti/", pos: "n.", meanings: ["권위", "당국", "권한"], example: "She spoke with great authority.", exampleKr: "그녀는 대단한 권위를 가지고 말했다." },
      { word: "behavior", pron: "/bɪˈheɪvjər/", pos: "n.", meanings: ["행동", "행실", "태도"], example: "Good behavior is expected in public.", exampleKr: "공공장소에서는 바른 행동이 기대된다." },
      { word: "benefit", pron: "/ˈbenɪfɪt/", pos: "n.", meanings: ["혜택", "이익", "장점"], example: "The benefits of exercise are well known.", exampleKr: "운동의 혜택은 잘 알려져 있다." },
      { word: "career", pron: "/kəˈrɪər/", pos: "n.", meanings: ["직업", "경력", "진로"], example: "She has had a successful career in medicine.", exampleKr: "그녀는 의학 분야에서 성공적인 경력을 쌓았다." },
      { word: "circumstance", pron: "/ˈsɜːrkəmstæns/", pos: "n.", meanings: ["상황", "환경", "사정"], example: "In most circumstances, honesty is the best policy.", exampleKr: "대부분의 상황에서 정직이 최선이다." },
      { word: "communication", pron: "/kəˌmjuːnɪˈkeɪʃən/", pos: "n.", meanings: ["의사소통", "통신", "전달"], example: "Good communication is key to a healthy relationship.", exampleKr: "좋은 의사소통은 건강한 관계의 핵심이다." },
      { word: "community", pron: "/kəˈmjuːnɪti/", pos: "n.", meanings: ["지역 사회", "공동체", "커뮤니티"], example: "Volunteering helps strengthen the community.", exampleKr: "자원봉사는 지역 사회를 강화하는 데 도움이 된다." },
      { word: "competition", pron: "/ˌkɒmpɪˈtɪʃən/", pos: "n.", meanings: ["경쟁", "대회", "시합"], example: "The competition was fierce this year.", exampleKr: "올해 경쟁이 치열했다." },
      { word: "concept", pron: "/ˈkɒnsept/", pos: "n.", meanings: ["개념", "생각", "구상"], example: "The concept of equality is fundamental.", exampleKr: "평등의 개념은 근본적이다." },
      { word: "condition", pron: "/kənˈdɪʃən/", pos: "n.", meanings: ["상태", "조건", "환경"], example: "The patient is in stable condition.", exampleKr: "환자는 안정적인 상태에 있다." },
      { word: "confidence", pron: "/ˈkɒnfɪdəns/", pos: "n.", meanings: ["자신감", "신뢰", "확신"], example: "Practice builds confidence.", exampleKr: "연습이 자신감을 키운다." },
      { word: "conflict", pron: "/ˈkɒnflɪkt/", pos: "n.", meanings: ["갈등", "충돌", "분쟁"], example: "Conflict in the workplace should be resolved quickly.", exampleKr: "직장 내 갈등은 빠르게 해결되어야 한다." },
      { word: "consequence", pron: "/ˈkɒnsɪkwəns/", pos: "n.", meanings: ["결과", "영향", "중요성"], example: "Think about the consequences of your actions.", exampleKr: "자신의 행동이 미치는 결과에 대해 생각하라." },
      { word: "context", pron: "/ˈkɒntekst/", pos: "n.", meanings: ["맥락", "상황", "문맥"], example: "You need to understand the word in context.", exampleKr: "문맥 속에서 단어를 이해해야 한다." }
    ]
  },

  6: {
    theme: "핵심 명사 II",
    words: [
      { word: "contribution", pron: "/ˌkɒntrɪˈbjuːʃən/", pos: "n.", meanings: ["기여", "공헌", "기부"], example: "Her contribution to the project was invaluable.", exampleKr: "프로젝트에 대한 그녀의 기여는 매우 소중했다." },
      { word: "controversy", pron: "/ˈkɒntrəvɜːsi/", pos: "n.", meanings: ["논란", "논쟁"], example: "The decision caused a lot of controversy.", exampleKr: "그 결정은 많은 논란을 일으켰다." },
      { word: "creativity", pron: "/ˌkriːeɪˈtɪvɪti/", pos: "n.", meanings: ["창의력", "창조성"], example: "Creativity is valued in design careers.", exampleKr: "디자인 분야에서 창의력은 높이 평가된다." },
      { word: "culture", pron: "/ˈkʌltʃər/", pos: "n.", meanings: ["문화", "교양", "재배"], example: "Living abroad teaches you about different cultures.", exampleKr: "해외 생활은 다양한 문화를 가르쳐 준다." },
      { word: "decision", pron: "/dɪˈsɪʒən/", pos: "n.", meanings: ["결정", "판단"], example: "Making the right decision takes time.", exampleKr: "올바른 결정을 내리는 데는 시간이 걸린다." },
      { word: "demand", pron: "/dɪˈmɑːnd/", pos: "n./v.", meanings: ["수요", "요구", "요구하다"], example: "There is a high demand for skilled workers.", exampleKr: "숙련된 노동자에 대한 수요가 높다." },
      { word: "development", pron: "/dɪˈveləpmənt/", pos: "n.", meanings: ["발전", "개발", "성장"], example: "Personal development is a lifelong journey.", exampleKr: "자기 계발은 평생의 여정이다." },
      { word: "diversity", pron: "/daɪˈvɜːrsɪti/", pos: "n.", meanings: ["다양성", "다변성"], example: "Diversity in the workplace improves creativity.", exampleKr: "직장 내 다양성은 창의력을 향상시킨다." },
      { word: "economy", pron: "/ɪˈkɒnəmi/", pos: "n.", meanings: ["경제", "절약", "경제 체제"], example: "The global economy is recovering slowly.", exampleKr: "세계 경제는 서서히 회복되고 있다." },
      { word: "education", pron: "/ˌedʒuˈkeɪʃən/", pos: "n.", meanings: ["교육", "학습"], example: "Education is the foundation of success.", exampleKr: "교육은 성공의 기반이다." },
      { word: "environment", pron: "/ɪnˈvaɪrənmənt/", pos: "n.", meanings: ["환경", "주변 환경"], example: "We must protect the natural environment.", exampleKr: "우리는 자연 환경을 보호해야 한다." },
      { word: "evidence", pron: "/ˈevɪdəns/", pos: "n.", meanings: ["증거", "징조"], example: "The evidence points to a clear conclusion.", exampleKr: "증거는 명확한 결론을 가리킨다." },
      { word: "experience", pron: "/ɪkˈspɪəriəns/", pos: "n.", meanings: ["경험", "체험", "경력"], example: "Work experience is important for your resume.", exampleKr: "업무 경험은 이력서에 중요하다." },
      { word: "factor", pron: "/ˈfæktər/", pos: "n.", meanings: ["요인", "요소", "인수"], example: "Diet is an important factor in good health.", exampleKr: "식이요법은 건강에 중요한 요인이다." },
      { word: "failure", pron: "/ˈfeɪljər/", pos: "n.", meanings: ["실패", "실패자", "고장"], example: "Failure is a stepping stone to success.", exampleKr: "실패는 성공으로 가는 디딤돌이다." },
      { word: "feature", pron: "/ˈfiːtʃər/", pos: "n.", meanings: ["특징", "기능", "특집"], example: "The phone has many useful features.", exampleKr: "그 폰은 유용한 기능이 많다." },
      { word: "foundation", pron: "/faʊnˈdeɪʃən/", pos: "n.", meanings: ["기반", "토대", "재단", "설립"], example: "A strong foundation makes a stable building.", exampleKr: "튼튼한 기반이 안정적인 건물을 만든다." },
      { word: "freedom", pron: "/ˈfriːdəm/", pos: "n.", meanings: ["자유", "해방"], example: "Freedom of speech is a basic human right.", exampleKr: "언론의 자유는 기본적인 인권이다." },
      { word: "function", pron: "/ˈfʌŋkʃən/", pos: "n.", meanings: ["기능", "역할", "함수"], example: "What is the main function of this device?", exampleKr: "이 기기의 주요 기능은 무엇인가?" },
      { word: "goal", pron: "/ɡoʊl/", pos: "n.", meanings: ["목표", "골", "목적"], example: "Set realistic goals and work towards them.", exampleKr: "현실적인 목표를 세우고 그것을 향해 나아가라." }
    ]
  },

  7: {
    theme: "일상생활 표현 I",
    words: [
      { word: "acknowledge", pron: "/əkˈnɒlɪdʒ/", pos: "v.", meanings: ["인정하다", "인식하다", "감사하다"], example: "He acknowledged his mistake and apologized.", exampleKr: "그는 자신의 실수를 인정하고 사과했다." },
      { word: "afford", pron: "/əˈfɔːrd/", pos: "v.", meanings: ["여유가 있다", "제공하다"], example: "I can't afford to buy a new car right now.", exampleKr: "나는 지금 당장 새 차를 살 여유가 없다." },
      { word: "agree", pron: "/əˈɡriː/", pos: "v.", meanings: ["동의하다", "합의하다"], example: "Do you agree with his opinion?", exampleKr: "그의 의견에 동의하나요?" },
      { word: "apologize", pron: "/əˈpɒlədʒaɪz/", pos: "v.", meanings: ["사과하다", "사죄하다"], example: "I apologize for the inconvenience.", exampleKr: "불편을 드려 죄송합니다." },
      { word: "appear", pron: "/əˈpɪər/", pos: "v.", meanings: ["나타나다", "보이다", "~인 것 같다"], example: "She appeared calm despite the pressure.", exampleKr: "그녀는 압박에도 침착해 보였다." },
      { word: "arrange", pron: "/əˈreɪndʒ/", pos: "v.", meanings: ["정리하다", "준비하다", "약속하다"], example: "Let's arrange a meeting for next week.", exampleKr: "다음 주에 미팅을 잡아봅시다." },
      { word: "avoid", pron: "/əˈvɔɪd/", pos: "v.", meanings: ["피하다", "회피하다"], example: "Try to avoid eating too much junk food.", exampleKr: "정크푸드를 너무 많이 먹는 것을 피하려고 노력해라." },
      { word: "complain", pron: "/kəmˈpleɪn/", pos: "v.", meanings: ["불평하다", "불만을 말하다"], example: "She complained about the slow service.", exampleKr: "그녀는 느린 서비스에 대해 불평했다." },
      { word: "cope", pron: "/koʊp/", pos: "v.", meanings: ["대처하다", "처리하다"], example: "How do you cope with stress?", exampleKr: "스트레스에 어떻게 대처하나요?" },
      { word: "decide", pron: "/dɪˈsaɪd/", pos: "v.", meanings: ["결정하다", "결심하다"], example: "Have you decided what to have for dinner?", exampleKr: "저녁으로 무엇을 먹을지 결정했나요?" },
      { word: "depend", pron: "/dɪˈpend/", pos: "v.", meanings: ["의존하다", "달려 있다"], example: "Success depends on hard work.", exampleKr: "성공은 열심히 노력하는 데 달려 있다." },
      { word: "deserve", pron: "/dɪˈzɜːrv/", pos: "v.", meanings: ["자격이 있다", "받을 만하다"], example: "You deserve a break after all that work.", exampleKr: "그 모든 일을 한 후에 당신은 쉬어야 할 자격이 있다." },
      { word: "disagree", pron: "/ˌdɪsəˈɡriː/", pos: "v.", meanings: ["동의하지 않다", "의견이 다르다"], example: "It's okay to disagree respectfully.", exampleKr: "서로 존중하며 의견이 달라도 괜찮다." },
      { word: "earn", pron: "/ɜːrn/", pos: "v.", meanings: ["벌다", "획득하다"], example: "She earns a good salary at her new job.", exampleKr: "그녀는 새 직장에서 좋은 월급을 받는다." },
      { word: "expect", pron: "/ɪkˈspekt/", pos: "v.", meanings: ["예상하다", "기대하다", "요구하다"], example: "I expect the package to arrive tomorrow.", exampleKr: "나는 내일 소포가 도착할 것으로 기대한다." },
      { word: "explain", pron: "/ɪkˈspleɪn/", pos: "v.", meanings: ["설명하다", "해명하다"], example: "Can you explain how this works?", exampleKr: "이것이 어떻게 작동하는지 설명해 줄 수 있나요?" },
      { word: "fail", pron: "/feɪl/", pos: "v.", meanings: ["실패하다", "낙제하다", "고장나다"], example: "Don't be afraid to fail; learn from it.", exampleKr: "실패를 두려워하지 마라. 그로부터 배워라." },
      { word: "handle", pron: "/ˈhændl/", pos: "v.", meanings: ["다루다", "처리하다", "손잡이"], example: "She handled the situation very professionally.", exampleKr: "그녀는 상황을 매우 전문적으로 처리했다." },
      { word: "hesitate", pron: "/ˈhezɪteɪt/", pos: "v.", meanings: ["망설이다", "주저하다"], example: "Don't hesitate to ask if you need help.", exampleKr: "도움이 필요하면 망설이지 말고 물어보세요." },
      { word: "manage", pron: "/ˈmænɪdʒ/", pos: "v.", meanings: ["관리하다", "경영하다", "어떻게든 하다"], example: "How do you manage your time effectively?", exampleKr: "시간을 어떻게 효과적으로 관리하나요?" }
    ]
  },

  8: {
    theme: "일상생활 표현 II",
    words: [
      { word: "mention", pron: "/ˈmenʃən/", pos: "v.", meanings: ["언급하다", "말하다"], example: "Did you mention the meeting to your boss?", exampleKr: "상사에게 회의에 대해 언급했나요?" },
      { word: "notice", pron: "/ˈnoʊtɪs/", pos: "v./n.", meanings: ["알아채다", "주목하다", "공고", "통지"], example: "Did you notice anything unusual?", exampleKr: "비정상적인 것을 알아챘나요?" },
      { word: "overcome", pron: "/ˌoʊvərˈkʌm/", pos: "v.", meanings: ["극복하다", "이겨내다"], example: "She overcame her fear of public speaking.", exampleKr: "그녀는 공개 연설에 대한 두려움을 극복했다." },
      { word: "participate", pron: "/pɑːrˈtɪsɪpeɪt/", pos: "v.", meanings: ["참여하다", "참가하다"], example: "Everyone is encouraged to participate.", exampleKr: "모든 사람이 참여하도록 권장된다." },
      { word: "persuade", pron: "/pərˈsweɪd/", pos: "v.", meanings: ["설득하다", "납득시키다"], example: "He persuaded her to take the job.", exampleKr: "그는 그녀가 그 일을 맡도록 설득했다." },
      { word: "provide", pron: "/prəˈvaɪd/", pos: "v.", meanings: ["제공하다", "공급하다"], example: "The company provides excellent benefits.", exampleKr: "그 회사는 훌륭한 복리후생을 제공한다." },
      { word: "realize", pron: "/ˈriːəlaɪz/", pos: "v.", meanings: ["깨닫다", "실현하다"], example: "I didn't realize how late it was.", exampleKr: "나는 얼마나 늦었는지 깨닫지 못했다." },
      { word: "recommend", pron: "/ˌrekəˈmend/", pos: "v.", meanings: ["추천하다", "권고하다"], example: "Can you recommend a good restaurant?", exampleKr: "좋은 식당을 추천해 줄 수 있나요?" },
      { word: "refuse", pron: "/rɪˈfjuːz/", pos: "v.", meanings: ["거절하다", "거부하다"], example: "She refused to give up on her dreams.", exampleKr: "그녀는 꿈을 포기하기를 거부했다." },
      { word: "remind", pron: "/rɪˈmaɪnd/", pos: "v.", meanings: ["상기시키다", "생각나게 하다"], example: "Please remind me about the meeting.", exampleKr: "회의에 대해 상기시켜 주세요." },
      { word: "replace", pron: "/rɪˈpleɪs/", pos: "v.", meanings: ["교체하다", "대신하다"], example: "It's time to replace the old equipment.", exampleKr: "낡은 장비를 교체할 시간이다." },
      { word: "require", pron: "/rɪˈkwaɪər/", pos: "v.", meanings: ["요구하다", "필요로 하다"], example: "The job requires three years of experience.", exampleKr: "그 직업은 3년의 경력을 요구한다." },
      { word: "respect", pron: "/rɪˈspekt/", pos: "v./n.", meanings: ["존중하다", "존경", "점"], example: "We should respect each other's opinions.", exampleKr: "우리는 서로의 의견을 존중해야 한다." },
      { word: "respond", pron: "/rɪˈspɒnd/", pos: "v.", meanings: ["응답하다", "반응하다"], example: "Please respond to the email by Friday.", exampleKr: "금요일까지 이메일에 회신해 주세요." },
      { word: "share", pron: "/ʃeər/", pos: "v.", meanings: ["공유하다", "나누다", "나눔"], example: "Feel free to share your thoughts.", exampleKr: "자유롭게 생각을 나눠 주세요." },
      { word: "solve", pron: "/sɒlv/", pos: "v.", meanings: ["해결하다", "풀다"], example: "We need to solve this problem together.", exampleKr: "우리는 함께 이 문제를 해결해야 한다." },
      { word: "succeed", pron: "/səkˈsiːd/", pos: "v.", meanings: ["성공하다", "뒤를 잇다"], example: "Anyone can succeed with the right mindset.", exampleKr: "올바른 마음가짐이 있으면 누구나 성공할 수 있다." },
      { word: "suggest", pron: "/səˈdʒest/", pos: "v.", meanings: ["제안하다", "암시하다"], example: "I suggest we take a different route.", exampleKr: "나는 다른 경로를 택하자고 제안한다." },
      { word: "trust", pron: "/trʌst/", pos: "v./n.", meanings: ["신뢰하다", "믿다", "신뢰"], example: "Trust is built over time.", exampleKr: "신뢰는 시간이 지나면서 쌓인다." },
      { word: "wonder", pron: "/ˈwʌndər/", pos: "v./n.", meanings: ["궁금하다", "놀라움", "경이"], example: "I wonder what the future holds.", exampleKr: "미래에 무슨 일이 있을지 궁금하다." }
    ]
  },

  9: {
    theme: "학문 & 직업 어휘",
    words: [
      { word: "abstract", pron: "/ˈæbstrækt/", pos: "n.", meanings: ["요약", "개요", "초록"], example: "Write a brief abstract before the research paper.", exampleKr: "연구 논문 앞에 간략한 요약을 써라." },
      { word: "academic", pron: "/ˌækəˈdemɪk/", pos: "adj.", meanings: ["학문적인", "학술적인", "학업의"], example: "She has an excellent academic record.", exampleKr: "그녀는 뛰어난 학업 성적을 가지고 있다." },
      { word: "acquire", pron: "/əˈkwaɪər/", pos: "v.", meanings: ["습득하다", "취득하다", "얻다"], example: "It takes time to acquire new skills.", exampleKr: "새로운 기술을 습득하는 데는 시간이 걸린다." },
      { word: "administration", pron: "/ədˌmɪnɪˈstreɪʃən/", pos: "n.", meanings: ["행정", "운영", "경영", "관리"], example: "She works in the school administration.", exampleKr: "그녀는 학교 행정 부서에서 일한다." },
      { word: "application", pron: "/ˌæplɪˈkeɪʃən/", pos: "n.", meanings: ["지원서", "신청", "적용", "응용"], example: "Submit your application before the deadline.", exampleKr: "마감일 전에 지원서를 제출하세요." },
      { word: "assignment", pron: "/əˈsaɪnmənt/", pos: "n.", meanings: ["과제", "임무", "배정"], example: "The assignment is due next Monday.", exampleKr: "과제는 다음 주 월요일이 마감이다." },
      { word: "candidate", pron: "/ˈkændɪdeɪt/", pos: "n.", meanings: ["지원자", "후보자"], example: "There are five candidates for the position.", exampleKr: "그 직위에 다섯 명의 지원자가 있다." },
      { word: "certificate", pron: "/sərˈtɪfɪkət/", pos: "n.", meanings: ["자격증", "수료증", "증명서"], example: "He earned a certificate in project management.", exampleKr: "그는 프로젝트 관리 자격증을 취득했다." },
      { word: "colleague", pron: "/ˈkɒliːɡ/", pos: "n.", meanings: ["동료", "직장 동료"], example: "She gets along well with her colleagues.", exampleKr: "그녀는 동료들과 잘 지낸다." },
      { word: "curriculum", pron: "/kəˈrɪkjələm/", pos: "n.", meanings: ["교육과정", "커리큘럼"], example: "The new curriculum focuses on critical thinking.", exampleKr: "새 교육과정은 비판적 사고에 중점을 둔다." },
      { word: "deadline", pron: "/ˈdedlaɪn/", pos: "n.", meanings: ["마감 기한", "기한"], example: "Meeting deadlines is crucial in the workplace.", exampleKr: "직장에서 마감 기한을 지키는 것이 중요하다." },
      { word: "degree", pron: "/dɪˈɡriː/", pos: "n.", meanings: ["학위", "정도", "도(온도)"], example: "She has a degree in economics.", exampleKr: "그녀는 경제학 학위를 가지고 있다." },
      { word: "department", pron: "/dɪˈpɑːrtmənt/", pos: "n.", meanings: ["부서", "학과", "부문"], example: "The HR department handles all hiring.", exampleKr: "인사 부서가 모든 채용을 담당한다." },
      { word: "executive", pron: "/ɪɡˈzekjətɪv/", pos: "n./adj.", meanings: ["임원", "경영자", "행정의"], example: "She was promoted to senior executive.", exampleKr: "그녀는 수석 임원으로 승진했다." },
      { word: "expertise", pron: "/ˌekspɜːrˈtiːz/", pos: "n.", meanings: ["전문 지식", "전문성"], example: "His expertise in finance is well recognized.", exampleKr: "재무 분야에서의 그의 전문성은 잘 알려져 있다." },
      { word: "graduate", pron: "/ˈɡrædʒuət/", pos: "v./n.", meanings: ["졸업하다", "졸업생"], example: "He graduated from university last June.", exampleKr: "그는 지난 6월에 대학을 졸업했다." },
      { word: "internship", pron: "/ˈɪntɜːrnʃɪp/", pos: "n.", meanings: ["인턴십", "인턴 과정"], example: "An internship helps you gain work experience.", exampleKr: "인턴십은 업무 경험을 쌓는 데 도움이 된다." },
      { word: "presentation", pron: "/ˌprezənˈteɪʃən/", pos: "n.", meanings: ["발표", "프레젠테이션", "제시"], example: "She gave an impressive presentation at the conference.", exampleKr: "그녀는 컨퍼런스에서 인상적인 발표를 했다." },
      { word: "qualification", pron: "/ˌkwɒlɪfɪˈkeɪʃən/", pos: "n.", meanings: ["자격", "자질", "자격증"], example: "What qualifications are required for this job?", exampleKr: "이 직업에는 어떤 자격이 필요한가요?" },
      { word: "seminar", pron: "/ˈsemɪnɑːr/", pos: "n.", meanings: ["세미나", "연구 모임"], example: "I attended a seminar on digital marketing.", exampleKr: "나는 디지털 마케팅 세미나에 참석했다." }
    ]
  },

  10: {
    theme: "사회 & 시사 어휘",
    words: [
      { word: "advocacy", pron: "/ˈædvəkəsi/", pos: "n.", meanings: ["옹호", "지지", "변호"], example: "She devoted her life to advocacy for human rights.", exampleKr: "그녀는 인권 옹호에 일생을 바쳤다." },
      { word: "bias", pron: "/ˈbaɪəs/", pos: "n.", meanings: ["편견", "편향", "선입견"], example: "Everyone has some form of unconscious bias.", exampleKr: "모든 사람은 어떤 형태의 무의식적 편견을 가지고 있다." },
      { word: "citizen", pron: "/ˈsɪtɪzən/", pos: "n.", meanings: ["시민", "국민"], example: "Every citizen has a right to vote.", exampleKr: "모든 시민은 투표할 권리가 있다." },
      { word: "corruption", pron: "/kəˈrʌpʃən/", pos: "n.", meanings: ["부패", "비리", "타락"], example: "Corruption undermines public trust.", exampleKr: "부패는 공공의 신뢰를 훼손한다." },
      { word: "democracy", pron: "/dɪˈmɒkrəsi/", pos: "n.", meanings: ["민주주의", "민주국가"], example: "Democracy depends on an informed citizenry.", exampleKr: "민주주의는 정보를 갖춘 시민에 달려 있다." },
      { word: "discrimination", pron: "/dɪˌskrɪmɪˈneɪʃən/", pos: "n.", meanings: ["차별", "식별"], example: "Discrimination based on gender is illegal.", exampleKr: "성별에 근거한 차별은 불법이다." },
      { word: "equality", pron: "/ɪˈkwɒlɪti/", pos: "n.", meanings: ["평등", "동등"], example: "Equality of opportunity is a core value.", exampleKr: "기회의 평등은 핵심 가치이다." },
      { word: "globalization", pron: "/ˌɡloʊbəlaɪˈzeɪʃən/", pos: "n.", meanings: ["세계화", "국제화"], example: "Globalization has connected people around the world.", exampleKr: "세계화는 전 세계 사람들을 연결했다." },
      { word: "immigration", pron: "/ˌɪmɪˈɡreɪʃən/", pos: "n.", meanings: ["이민", "이주"], example: "Immigration has shaped the culture of many nations.", exampleKr: "이민은 많은 나라의 문화를 형성했다." },
      { word: "inequality", pron: "/ˌɪnɪˈkwɒlɪti/", pos: "n.", meanings: ["불평등", "불균등"], example: "Income inequality is a growing concern.", exampleKr: "소득 불평등은 점점 더 큰 우려 사항이다." },
      { word: "infrastructure", pron: "/ˈɪnfrəstrʌktʃər/", pos: "n.", meanings: ["사회 기반 시설", "인프라"], example: "The country needs to invest in its infrastructure.", exampleKr: "그 나라는 사회 기반 시설에 투자해야 한다." },
      { word: "legislation", pron: "/ˌledʒɪˈsleɪʃən/", pos: "n.", meanings: ["법률", "입법", "법안"], example: "New legislation was passed to protect workers.", exampleKr: "근로자를 보호하기 위한 새 법률이 통과되었다." },
      { word: "media", pron: "/ˈmiːdiə/", pos: "n.", meanings: ["미디어", "언론", "매체"], example: "The media plays a powerful role in society.", exampleKr: "미디어는 사회에서 강력한 역할을 한다." },
      { word: "policy", pron: "/ˈpɒlɪsi/", pos: "n.", meanings: ["정책", "방침"], example: "The new policy aims to reduce carbon emissions.", exampleKr: "새 정책은 탄소 배출량을 줄이는 것을 목표로 한다." },
      { word: "poverty", pron: "/ˈpɒvərti/", pos: "n.", meanings: ["빈곤", "가난"], example: "Education helps people escape poverty.", exampleKr: "교육은 사람들이 빈곤에서 벗어나도록 돕는다." },
      { word: "prejudice", pron: "/ˈpredʒədɪs/", pos: "n.", meanings: ["편견", "선입견"], example: "We must fight against prejudice in all forms.", exampleKr: "우리는 모든 형태의 편견에 맞서 싸워야 한다." },
      { word: "protest", pron: "/ˈproʊtest/", pos: "n./v.", meanings: ["시위", "항의", "항의하다"], example: "Citizens held a peaceful protest in the city center.", exampleKr: "시민들은 도심에서 평화로운 시위를 벌였다." },
      { word: "reform", pron: "/rɪˈfɔːrm/", pos: "n./v.", meanings: ["개혁", "개정", "개혁하다"], example: "The education system needs significant reform.", exampleKr: "교육 시스템은 상당한 개혁이 필요하다." },
      { word: "sustainability", pron: "/səˌsteɪnəˈbɪlɪti/", pos: "n.", meanings: ["지속 가능성"], example: "Sustainability is key to our future.", exampleKr: "지속 가능성은 우리의 미래에 핵심이다." },
      { word: "welfare", pron: "/ˈwelfeər/", pos: "n.", meanings: ["복지", "안녕", "생활 보호"], example: "The government increased welfare spending.", exampleKr: "정부는 복지 지출을 늘렸다." }
    ]
  }

};

/**
 * Day 11~300 플레이스홀더 생성
 * (실제 서비스에서는 외부 JSON 파일이나 API로 확장)
 */
const DAY_THEMES = [
  "핵심 동사 I","핵심 동사 II","핵심 형용사 I","핵심 형용사 II",
  "핵심 명사 I","핵심 명사 II","일상생활 표현 I","일상생활 표현 II",
  "학문 & 직업 어휘","사회 & 시사 어휘",
  "감정 & 심리 표현","여행 & 교통","음식 & 건강","환경 & 자연",
  "기술 & 미디어","비즈니스 표현","학교 & 교육","스포츠 & 취미",
  "가족 & 인간관계","문화 & 예술","숙어 표현 I","숙어 표현 II",
  "숙어 표현 III","고급 동사 I","고급 동사 II","고급 형용사 I",
  "고급 형용사 II","고급 명사 I","고급 명사 II","TOEIC 빈출 어휘 I",
  "TOEIC 빈출 어휘 II","TOEFL 필수 어휘 I","TOEFL 필수 어휘 II",
  "법률 & 경제 기초","의학 & 과학 기초","환경 & 에너지","정치 & 외교",
  "심리 & 철학","언어 & 문학","역사 & 문명","복합 숙어 I","복합 숙어 II",
  "구동사 I","구동사 II","구동사 III","학술 표현 I","학술 표현 II",
  "뉴스 & 시사 어휘","인터넷 & SNS 표현","종합 복습"
];

// Day 11~300 플레이스홀더 (테마명만 표시, 단어는 Coming Soon)
for (let d = 11; d <= 300; d++) {
  const themeIdx = (d - 1) % DAY_THEMES.length;
  VOCA_DATA[d] = {
    theme: DAY_THEMES[themeIdx],
    words: [] // 추후 확장
  };
}

/**
 * 전체 Day 수
 */
const TOTAL_DAYS = 300;

/**
 * 전체 단어 플랫 배열 (검색용)
 * @returns {Array<{day, idx, word, pron, pos, meanings, example, exampleKr}>}
 */
function getAllWords() {
  const result = [];
  for (let d = 1; d <= TOTAL_DAYS; d++) {
    const dayData = VOCA_DATA[d];
    if (!dayData) continue;
    (dayData.words || []).forEach((w, idx) => {
      result.push({ day: d, idx, ...w });
    });
  }
  return result;
}
