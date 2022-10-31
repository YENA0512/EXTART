const qnaList = [
  {
    q: '원하는 운동의 격한 정도를 선택해주세요',
    a: [
      { answer: '가볍게 - 숨이 싶어지지만 편히 대화할 수 있는 정도', type: ['요가', '필라테스', '골프','크로스핏'] },
      { answer: '강하게 - 대화하기에 숨쉬기 다소 힘든 정도', type: ['클라이밍','크로스핏','테니스'] },
      { answer: '아주 강하게 - 숨이 많이 차고 숨쉬기 힘든 정도', type: ['축구','수영','복싱','요가'] },
    ]
  },
  {
    q: '혼자서 하는 운동을 좋아하시나요? ',
    a: [
      { answer: '혼자 운동하는 것을 좋아해요', type: ['요가','필라테스','클라이밍'] },
      { answer: '여럿이 모여서 하는 함께 운동을 좋아해요', type: ['골프','복싱','크로스핏','축구'] },
      { answer: '팀을 결성해서 승부를 가리는 운동을 좋아해요', type: ['축구','테니스','수영','요가','클라이밍','크로스핏'] },
    ]
  },
  {
    q: '몸에서 통증을 느끼는 부위가 있나요?',
    a: [
      { answer: '일상생활에 지장이 갈 정도로 아픈 곳이 있어요', type: ['요가','클라이밍','골프','복싱'] },
      { answer: '조금 통증을 느끼지만 지장은 없어요', type: ['필라테스','테니스','수영','축구'] },
      { answer: '부상 경험이 없고 불편한 부위가 없어요', type: ['복싱','크로스핏','축구']  },
    ]
  }
]

const infoList = [
  {
    name: '수영',
    desc1: '<br>수영은 신체 전반을 골고루 사용하는, 에너지 소비량이 큰 대표적인 유산소 운동입니다. 부력에 의해 체중의 80%정도가 감소되기 때문에 노약자나 비만, 관절염환자에게 권유되며, 심폐체력 향상은 물론 다이어트에 효과적인 운동입니다. 수영은 운동 중에서도 칼로리 소모가 높습니다. 1시간을 운동한다고 가정했을 때 걷기는 300 칼로리, 자전거 타기는 360칼로리가 소모되는데, 수영은 720 칼로리가 소모됩니다. <br><br><br><h2>이런 분들에게 추천해요! </h2>치질이 있는 사람, 당뇨병을 앓고 있는 사람, 관절염 등 무릎이 안좋은 사람, 천식을 앓고 있는 사람, 임신 중인 사람<br><br><br><h2>이런 분들에게 안좋을 수 있어요.</h2>피부염이 있는 사람, 중이염을 앓고 있는 사람, 심장병을 앓고 있는 사람, 어깨질환이 있는 사람, 허리질환이 있는 사람<br>'
  },
  {
    name: '테니스',
    desc1: '<br>테니스는 힘과 지구력, 속도, 유연성 등의 체력을 향상시킬 뿐만 아니라 가족 단위로도 즐길 수 있는 운동입니다. 이러한 테니스를 즐기다 보면 집중력, 의지력, 민첩성, 정신력, 그리고 책임감이 크게 향상 됩니다.<br><br><br><h2>심혈관 질환 예방</h2><br>테니스는 시작부터 끝까지 뛰어다니면서 공을 치는 운동이기 때문에 활동량이 엄청납니다. 1시간에 500~600Kcal를 소모하기 때문에 다이어트 효과까지 볼 수 있습니다. 공을 치기 위해서 넓은 코트를 정해진 반경 없이 뛰어 다니게 되면 유산소 운동 효과와 더불어 심장과 혈관이 튼튼해지면서 심혈관 질환 예방까지 해줍니다.<br><br><h2>스트레스 해소</h2><br>테니스는 한 시간동안 코트를 뛰어 다니면서 공을 맞추는 운동이다 보니 공을 주시하고 상대방의 움직임을 캐치하는데 뇌를 사용합니다. 이때 뇌로 가는 혈류량을 증가시켜 자연스럽게 스트레스 받았던 것들에 해소되는 효과를 보면서 운동을 하는 내내 다른 잡생각이 사라지고 집중력이 증가하게 됩니다.<br><br><h2>무산소운동 + 유산소운동</h2><br>테니스 코트를 뛰어다니면서 호흡할때 유산소 운동의 효과가 나지만 라켓으로 공을 맞받아 치고 다양한 팔의 근육을 쓰이면서 무산소 운동 효과도 더불어 주기 때문에 기초대사량에도 큰 영향을 끼칩니다.<br>'
  },
  {
    name: '골프',
    desc1: '<br>골프는 대부분 걷기 위주의 유산소 운동형태이며, 심혈관계에 무리가 가지 않는 낮은 강도의 운동입니다. 이러한 골프 경기는 대략적으로 4시간에 걸쳐서 10km의 거리를 샷을 병행하면서 이루어지기 때문에 심리적, 기술적, 체력적인 요소를 좋게 합니다. 드라이버부터 아이언, 웨지, 퍼터에 이르기까지 다양한 클럽을 선택해가면서 강하고 약한 힘을 번갈아 사용하기 때문에 상체의 근육 발달에 효과적입니다. 연습장에서 1시간 이상 스윙 연습을 하는 것도 몸의 유연성 향상과 함께 상체 근육의 발달에 도움을 줍니다. <br><br><br><br><br>'
  },
  {
    name: '복싱',
    desc1: '<br>복싱은 유산소 운동과 무산소 운동 효과를 동시에 누릴 수 있는 대표적인 운동입니다. 먼저 머리끝부터 발끝까지 전신을 이용해 뛰면서 산소를 소비해<br>체지방을 연소시키고, 칼로리를 소모하며, 심폐기능을 강화할 수 있습니다.<br><br>복싱은 순간적인 힘을 필요로 하기때문에 근력을 향상시키고 쓸데없는 군살을 없애주며 탄력적인 몸매로 만들어줍니다. 보통 여성들이 잘 쓰지 않아 빼기 힘든 팔 안쪽 부분과 허벅지 안쪽의 근육을 활성화시켜 군살을 제거해줍니다. 발 뒤꿈치를 들고 운동하기 때문에 종아리 지방을 없애주고 "힙 업"에도 좋은 효과를 지니고, 운동 전후로 하는 스트레칭, 줄넘기, 팔 굽혀 펴기, 자전거 운동 등도 유산소와 근력 운동의 효과를 배가시킵니다.<br><br>한편, 복싱의 숨겨진 건강 효과가 있는데 바로 샌드백에 주먹을 날리면서 얻는 스트레스 해소 효과입니다. 요즘 헬스클럽 등에서는 복싱에 에어로빅, 태권도 등을 접목한 태보 등을 하는데,  신나는 음악에 맞춰하므로 재미까지 덤으로 얻을 수 있습니다.<br><br>권투의 기본 동작 중 팔을 뻗는 잽스트레이트는 팔과 어깨를 쭉 뻗어 군살을 제거해 주고, 위빙(상체를 좌우로 흔드는 동작)과 더킹(상체를 상하로 흔드는 동작)동작은 복부, 허리, 허벅지 등의 군살 제거에 효과적이다. 앞뒤로 발걸음을 재는 스텝 동작은 종아리 지방 제거에 탁월한 효과가 있습니다.  몸을 좌우로 틀면서 한쪽 다리에 힘을 주고 반대쪽 다리를 쭉 뻗는 동작인 사이드 런지는 허벅지 군살을 없애는데 효과적이기도 합니다.<br>'
  },
  {
    name: '축구',
    desc1: '<br>축구는 하체 근력을 강화시켜 주고, 장시간 경기를 지속할 수 있는 심폐지구력 능력의 향상에 효과적이며 평소 잘 이용하지 않는 신체부위로 볼을 다루어야 하기 때문에 청소년의 신경발달에 도움을 주는 운동입니다.<br>',
  },
  {
    name: '클라이밍',
    desc1: '<br>암벽등반은 등반 방식에 따라 인공 등반, 자유등반, 볼더링이 있습니다. 이중에서 스포츠 클라이밍 또는 인공 등반은 인공으로 만든 암벽을 등반하는 스포츠입니다.<br> 인공암벽등반은 볼트와 같은 바위에 고정된 영구 확보물에 안전을 맡기며 등반합니다. 인공암벽등반은 직접 확보물을 설치해야 한다는 부담이 적기 때문에 힘과 지구력과 같은 육체적 능력이 강조됩니다.<br><br><br><h2>근력 강화</h2><br>클라이밍을 할 때는 평소 잘 사용하지 않던 근육까지 사용하게 되어 몸을 균형 있게 발달시킬 수 있으며, 다양한 각도와 높이를 오르내리기 때문에 상하지 근육이 발달합니다. 클라이밍은 전신 근육과 균형감각 발달을 기대할 수 있는 좋은 운동이며, 특히 잡고 매달리는 동작이 많아 멋진 상체 근육을 만들 수 있을 것으로 기대한다"고 말하기도 했습니다. <br><br><h2>집중력 향상 </h2><br>클라이밍을 하다가 자칫 잘못하면 부상을 입거나 아래로 떨어질 수 있기 때문에 고도의 집중력이 필요합니다. 평소 집중을 잘하지 못하는 사람도 다음 단계로 나아가기 위해 경로를 탐색하고 손과 발을 내딛다 보면 자연스럽게 집중하는 힘이 생길 것입니다. <br><br><h2>스트레스 해소</h2><br>자신의 한계에 도전하면서 목표 지점까지 도달하면 짜릿한 성취감을 느끼고 자신감이 생깁니다. <br>이 외에도 클라이밍은 유연성 향상, 자신감 상승, 관절 운동 범위 확대, 정신력 강화 등의 효과가 있습니다. 클라이밍을 즐기는 사람들은 줄 하나에 몸을 의지해 맨손으로 목표 지점까지 ‘완등’했을 때의 성취감을 이루어 말할 수 없다고 말합니다.<br>'
  },
  {
    name: '필라테스',
    desc1: '<br>필라테스는 독일의 스포츠 연구가 조셉 필라테스(Joseph Pilates)가 제1차 세계대전 때 부상당한 포로들의 활동과 생활을 향상시키기 위해 고안한 전신 운동법입니다. <br>움직임과 호흡을 함께 조정해 몸의 깊은 근육을 안정적으로 작동시켜 강화하고 몸을 정렬해주는 효과가 있습니다. <br><br><br><br><br><h2>이런 분들에게 안좋을 수 있어요.</h2><br>허리디스크, 즉 추간판탈출증이 있다면 복근과 허리 근육을 무리하게 사용하는 필라테스 동작은 삼가는 것이 좋아요. 동작을 하다가 통증이 오는 부위가 있다면 더는 무리해서 시도하지 마세요. 디스크 환자에게 가장 추천할만한 운동은 바른 자세로 적당히 걷기이므로 평소 복부에 힘을 주고 허리를 바로 세우고 걷는 연습을 하며, 걷는 것이 무리가 없다면 복근을 단련하는 필라테스 동작을 조금씩 시도할 수 있어요. <br>'
  },
  {
    name: '크로스핏',
    desc1: '<br>크로스핏은 고강도 운동이 섞인 프로그램인 ‘와드(WOD · Workout Of the Day)’로 진행되며 스트레칭을 시작으로 웨이트 트레이닝, 맨몸운동, 윗몸 일으키기 등 전신을 활용한 운동을 1시간 정도 진행됩니다.<br>크로스핏은 매일 운동 종류가 바뀌어 지루할 틈이 없고 다른 사람과 팀으로 구성되어 함께 운동하기 때문에 동료애뿐만 아니라 경쟁의식으로 더욱 의지를 다질 수 있습니다. 또한 1시간 동안 고강도의 운동을 한 후 자신의 결과를 기록하는 운동 문화로 ‘성장감’과 ‘성취감’을 모두 얻을 수 있습니다.<br><br><br><h2>풀업(Full Up)</h2><br>크로스핏 와드 프로그램 중 한 운동 종목인 풀업은 턱걸이라고 생각하면 되는데요. 정자세로 하는 것이 기본이나 반동을 주어 하는 방법도 있습니다. 풀업을 통해 코어 근육을 비롯하여 견갑골의 근육과 광배근을 키울 수 있습니다.<br><br><h2>에어 스쿼트(Air Squart)</h2><br>‘맨몸 스쿼트’인 에어 스쿼트는 엉덩이가 무릎보다 낮은 위치까지만 앉았다 일어나는 기본적인 운동 자세입니다. 에어 스쿼트는 한 동작만으로 엉덩이와 허벅지 앞, 뒤쪽, 그리고 코어에도 자극을 줄 수 있습니다.<br><br><h2>버피 테스트(Burpee Test)</h2><br>버피 테스트는 짧은 시간 안에 운동 효과를 극대화할 수 있는 유산소성 근력 운동입니다. 허리를 곧게 펴고 상체를 숙인 뒤 바닥에 양손을 짚고 점프하듯 다리를 뒤로 뻗은 후, 다시 한번에 다리를 앞쪽으로 점프한 뒤 일어서는 동작을 반복합니다. <br>'
  },
  {
    name: '요가',
    desc1: '<br>요가는 고대 인도에서 유래한 수행법입니다. 현대사회에서는 종교적 수행 역역에 머물러 있지 않습니다. 마음 챙김의 요소가 있어 때때로 명상적인 움직임이라고 불리기도 합니다. 복식 호흡을 기본으로 하는 운동이고 호흡과 밸런스에 중점을 맞췄습니다. 현재 학원이나 매체에서 쉽게 접할 수 있는 요가는 ‘현대요가’로, 인도에서 시작한 ‘정통요가’를 일반인들도 쉽게 배울 수 있도록 변형한 형태입니다.<br><br> 정통 요가가 현대 요가로 변형되며 다양한 종류로 파생되었습니다.<br> 요가는 난이도에 따라 여러가지 종류가 있는데, 초심자들에게는 힐링요가를 추천드립니다. 힐링요가는 기초 동작과 스트레칭 동작들로 구성돼 있어 몸이 유연하지 않아도 누구나 따라 할 수 있지만, 동작이 쉽다 보니 열량 소모는 크지 않은 편입니다. 요가 초심자, 혹은 신체 단련보다 마음 수련에 집중하고 싶은 분들에게 추천합니다.<br><br>마이링 요가, 도구를 사용하기 때문에 다른 요가보다 더 재미있게 배울 수 있다는 장점이 있습니다. 스트레칭과 적당한 고난도의 동작을 함께 하고 싶은 분들께 추천합니다.<br><br>비크람 요가, 빈야사, 아쉬탕가 요가를 쉽게 볼 수 있습니다.<br><br><br><h2>이런 분들에게는 안좋을 수 있어요.</h2><br>척추측만증을 앓고 있는 분들은 허리를 깊이 구부리는 자세와 반대로 코브라 자세같이 허리를 등쪽으로 많이 펴는 동작을 할 때 안 좋을 수 있어요. 누워서 손과 발을 올려서 몸을 알파벳 U자로 만드는 휠자세도 비대칭적인 척추측만증 환자에게 무리가 오기 때문에 피하세요.<br> '
  },

]
