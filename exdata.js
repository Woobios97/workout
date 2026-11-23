"use strict";
const PM={
 "sq": "허벅지 앞, 엉덩이",
 "hg": "허벅지 뒤, 엉덩이",
 "lg": "허벅지 앞, 엉덩이",
 "lc": "허벅지 뒤",
 "le": "허벅지 앞",
 "cf": "종아리",
 "gl": "엉덩이",
 "hp": "가슴, 삼두",
 "ip": "가슴, 어깨 앞",
 "vp": "어깨 앞, 어깨 옆",
 "dp": "가슴, 삼두",
 "hr": "등 위, 등 넓은 근육",
 "vr": "등 넓은 근육, 이두",
 "lt": "어깨 옆",
 "rd": "어깨 뒤, 등 위",
 "bc": "이두",
 "tc": "삼두",
 "co": "복근",
 "cr": "복근"
};
const PC={
 "sq": "무릎은 발끝 방향/허리 말리기 전까지만 내려가기/발 전체로 밀며 일어서기",
 "hg": "등 편 채 엉덩이를 뒤로/무게는 다리에 붙여 움직이기/허리 말리면 범위 줄이기",
 "lg": "앞발 전체로 바닥 누르기/무릎은 발끝 방향/상체 흔들리지 않게 천천히",
 "lc": "허벅지를 받침에 붙이기/무릎만 굽혀 뒤꿈치 당기기/반동 없이 천천히 펴기",
 "le": "무릎을 기구 회전축에 맞추기/허벅지를 받침에 붙이기/무릎을 세게 잠그지 않기",
 "cf": "발 앞부분을 단단히 지지/뒤꿈치를 천천히 올리기/반동 없이 천천히 내리기",
 "gl": "갈비뼈 내리고 배에 힘/뒤꿈치로 밀며 엉덩이 조이기/허리를 과하게 젖히지 않기",
 "hp": "날개뼈 모으고 등 붙이기/가슴 중간으로 내리기/팔꿈치 끝까지 잠그지 않기",
 "ip": "등과 엉덩이는 벤치에/윗가슴 방향으로 내리기/어깨 아프면 범위 줄이기",
 "vp": "배에 힘 주고 허리 고정/팔꿈치를 손목 아래에/통증 없는 범위로 밀어 올리기",
 "dp": "어깨 아프면 바로 멈추기/상체 살짝 앞으로/팔꿈치 90도까지만",
 "hr": "가슴 펴고 어깨 내리기/팔꿈치를 뒤로 당기기/허리 반동 없이 돌아오기",
 "vr": "어깨 내린 채 시작/쇄골 쪽으로 당기기/천천히 올려 보내기",
 "lt": "어깨 내리고 팔꿈치 살짝 굽히기/어깨 높이까지만 올리기/몸을 흔들지 않고 내리기",
 "rd": "허리 고정하고 어깨 내리기/팔꿈치를 옆으로 벌리기/반동 없이 천천히 돌아오기",
 "bc": "팔꿈치를 몸 옆에 고정/손목 꺾지 않고 당기기/어깨 반동 없이 내리기",
 "tc": "팔꿈치 위치를 고정/손목은 곧게 유지/통증 없는 범위로 펴기",
 "co": "갈비뼈 내리고 배에 힘/허리가 꺾이지 않게 유지/숨을 천천히 이어 쉬기",
 "cr": "배에 힘 주고 시작/갈비뼈를 골반 쪽으로 말기/목을 당기거나 반동 쓰지 않기"
};
const EXRAW={
 "스쿼트": "Barbell_Squat;bb;high;hard;sq;;안전바를 앉은 높이 바로 아래에/발 전체로 누르고 무릎은 발끝 방향/허리 말리기 전까지만 앉기;",
 "루마니안 데드": "Romanian_Deadlift;bb;high;mid;hg;;;",
 "불가리안 스플릿 스쿼트": "Split_Squat_with_Dumbbells;db;low;hard;lg;;;",
 "레그컬": "Lying_Leg_Curls;mc;low;easy;lc;;;",
 "카프레이즈": "Standing_Calf_Raises;mc;mid;easy;cf;;;",
 "플랭크": "Plank;bw;low;easy;co;;;s",
 "벤치프레스": "Barbell_Bench_Press_-_Medium_Grip;bb;low;hard;hp;;세이프티를 가슴 높이 바로 아래/날개뼈 모으고 발은 바닥에/봉을 가슴 아래쪽에 닿게;",
 "시티드 로우": "Seated_Cable_Rows;cable;low;easy;hr;;;",
 "덤벨 숄더프레스": "Dumbbell_Shoulder_Press;db;mid;mid;vp;;;",
 "랫풀다운": "Wide-Grip_Lat_Pulldown;cable;low;easy;vr;;;",
 "사이드 레터럴": "Side_Lateral_Raise;db;low;easy;lt;;;",
 "페이스풀": "Face_Pull;cable;low;easy;rd;;;",
 "바벨컬": "Barbell_Curl;bb;mid;mid;bc;;;",
 "푸시다운": "Triceps_Pushdown;cable;low;easy;tc;;;",
 "데드리프트": "Barbell_Deadlift;bb;high;hard;hg;;봉을 정강이에 붙이고 시작/배에 힘 주고 반복 사이에 숨 고르기/내릴 때도 봉을 몸에 붙이기;",
 "레그프레스": "Leg_Press;mc;low;easy;sq;;;",
 "힙쓰러스트": "Barbell_Hip_Thrust;bb;mid;mid;gl;;;",
 "레그익스텐션": "Leg_Extensions;mc;low;easy;le;;;",
 "워킹 런지": "Dumbbell_Lunges;db;low;mid;lg;;;",
 "케이블 크런치": "Cable_Crunch;cable;mid;mid;cr;;;",
 "풀업": "Pullups;bw;low;hard;vr;;;",
 "인클라인 덤벨프레스": "Incline_Dumbbell_Press;db;low;mid;ip;;;",
 "원암 덤벨로우": "One-Arm_Dumbbell_Row;db;low;easy;hr;;;",
 "딥스": "Parallel_Bar_Dip;bw;low;hard;dp;;;",
 "리어델트 플라이": "Reverse_Machine_Flyes;mc;low;easy;rd;;;",
 "해머컬": "Hammer_Curls;db;low;easy;bc;;;",
 "오버헤드 익스텐션": "Standing_Dumbbell_Triceps_Extension;db;mid;mid;tc;;;",
 "핵스쿼트": "Hack_Squat;mc;low;easy;sq;;;",
 "스미스 스쿼트": "Smith_Machine_Squat;mc;mid;mid;sq;;;",
 "고블릿 스쿼트": "Goblet_Squat;db;mid;easy;sq;;;",
 "트랩바 데드리프트": "Trap_Bar_Deadlift;bb;mid;mid;hg;;;",
 "덤벨 루마니안 데드": "Stiff-Legged_Dumbbell_Deadlift;db;mid;mid;hg;;;",
 "스미스 루마니안 데드": "Smith_Machine_Stiff-Legged_Deadlift;mc;mid;mid;hg;;;",
 "백 익스텐션": "Hyperextensions_Back_Extensions;bw;mid;easy;hg;;패드는 골반 아래/엉덩이를 접어 상체 내리기/몸과 다리가 일직선까지만 올리기;",
 "덤벨 런지": "Dumbbell_Lunges;db;low;mid;lg;;;",
 "리버스 런지": "Dumbbell_Rear_Lunge;db;low;mid;lg;;;",
 "스텝업": "Dumbbell_Step_Ups;db;low;easy;lg;;;",
 "스미스 스플릿 스쿼트": "Smith_Single-Leg_Split_Squat;mc;low;easy;lg;;;",
 "맨몸 워킹 런지": "Bodyweight_Walking_Lunge;bw;low;easy;lg;;;",
 "시티드 레그컬": "Seated_Leg_Curl;mc;low;easy;lc;;;",
 "스탠딩 레그컬": "Standing_Leg_Curl;mc;low;easy;lc;;;",
 "볼 레그컬": "Ball_Leg_Curl;ball;low;mid;lc;;뒤꿈치를 짐볼에/몸통과 허벅지 일직선 유지/허리 젖히지 않고 공 당기기;",
 "글루트 브릿지": "Barbell_Glute_Bridge;bb;low;easy;gl;;;",
 "싱글 레그 브릿지": "Single_Leg_Glute_Bridge;bw;low;easy;gl;;;",
 "케이블 킥백": "One-Legged_Cable_Kickback;cable;low;easy;gl;;;",
 "싱글 레그 익스텐션": "Single-Leg_Leg_Extension;mc;low;easy;le;;;",
 "스미스 카프레이즈": "Smith_Machine_Calf_Raise;mc;low;easy;cf;;;",
 "레그프레스 카프레이즈": "Calf_Press_On_The_Leg_Press_Machine;mc;low;easy;cf;;;",
 "시티드 카프레이즈": "Seated_Calf_Raise;mc;low;easy;cf;;;",
 "덤벨 카프레이즈": "Standing_Dumbbell_Calf_Raise;db;low;easy;cf;;;",
 "덤벨 벤치프레스": "Dumbbell_Bench_Press;db;low;mid;hp;;;",
 "스미스 벤치프레스": "Smith_Machine_Bench_Press;mc;low;easy;hp;;;",
 "체스트프레스 머신": "Leverage_Chest_Press;mc;low;easy;hp;;;",
 "푸시업": "Pushups;bw;low;easy;hp;;머리부터 발까지 일직선/허리가 처지지 않게 배에 힘/가슴을 바닥 쪽으로 내리고 밀기;",
 "인클라인 머신프레스": "Leverage_Incline_Chest_Press;mc;low;easy;ip;;;",
 "인클라인 바벨프레스": "Barbell_Incline_Bench_Press_-_Medium_Grip;bb;low;hard;ip;;;",
 "스미스 인클라인 프레스": "Smith_Machine_Incline_Bench_Press;mc;low;easy;ip;;;",
 "시티드 딥 머신": "Dip_Machine;mc;low;easy;dp;;;",
 "벤치 딥스": "Bench_Dips;bw;low;mid;tc;삼두;위팔을 몸 옆에 두고 천천히 내려요/어깨가 불편하면 다른 동작으로 바꿔요;",
 "머신 로우": "Leverage_Iso_Row;mc;low;easy;hr;;;",
 "바벨 로우": "Bent_Over_Barbell_Row;bb;high;hard;hr;;;",
 "원암 케이블 로우": "Seated_One-arm_Cable_Pulley_Rows;cable;low;easy;hr;;;",
 "체스트 서포티드 덤벨로우": "Dumbbell_Incline_Row;db;low;easy;hr;;;",
 "티바 로우": "T-Bar_Row_with_Handle;bb;high;mid;hr;;;",
 "클로즈그립 랫풀다운": "Close-Grip_Front_Lat_Pulldown;cable;low;easy;vr;;;",
 "언더그립 랫풀다운": "Underhand_Cable_Pulldowns;cable;low;easy;vr;;;",
 "어시스트 풀업": "Band_Assisted_Pull-Up;band;low;mid;vr;;;",
 "친업": "Chin-Up;bw;low;hard;vr;;;",
 "머신 숄더프레스": "Leverage_Shoulder_Press;mc;low;easy;vp;;;",
 "바벨 오버헤드프레스": "Barbell_Shoulder_Press;bb;high;hard;vp;;;",
 "스미스 숄더프레스": "Smith_Machine_Overhead_Shoulder_Press;mc;low;easy;vp;;;",
 "케이블 레터럴": ";cable;low;easy;lt;;;",
 "밴드 레터럴": "Lateral_Raise_-_With_Bands;band;low;easy;lt;;;",
 "덤벨 리어델트 플라이": "Reverse_Flyes;db;mid;mid;rd;;;",
 "케이블 리어델트 플라이": "Cable_Rear_Delt_Fly;cable;low;easy;rd;;;",
 "밴드 풀어파트": "Band_Pull_Apart;band;low;easy;rd;;;",
 "로프 리어델트 로우": "Cable_Rope_Rear-Delt_Rows;cable;low;easy;rd;;;",
 "덤벨컬": "Dumbbell_Bicep_Curl;db;low;easy;bc;;;",
 "케이블컬": "Standing_Biceps_Cable_Curl;cable;low;easy;bc;;;",
 "EZ바컬": "EZ-Bar_Curl;bb;mid;mid;bc;;;",
 "프리처컬": "Preacher_Curl;bb;low;easy;bc;;위팔을 패드에 붙이고 반동 없이;",
 "로프 해머컬": "Cable_Hammer_Curls_-_Rope_Attachment;cable;low;easy;bc;;;",
 "인클라인 해머컬": "Incline_Hammer_Curls;db;low;easy;bc;;등을 벤치에 대고 팔을 자연스럽게 아래로;",
 "로프 푸시다운": "Triceps_Pushdown_-_Rope_Attachment;cable;low;easy;tc;;;",
 "케이블 오버헤드 익스텐션": "Triceps_Overhead_Extension_with_Rope;cable;low;easy;tc;;;",
 "스컬크러셔": "EZ-Bar_Skullcrusher;bb;low;mid;tc;;;",
 "덤벨 킥백": "Tricep_Dumbbell_Kickback;db;low;easy;tc;;;",
 "데드버그": "Dead_Bug;bw;low;easy;co;;;s",
 "사이드 플랭크": "Side_Bridge;bw;low;easy;co;;;s",
 "크런치 머신": "Ab_Crunch_Machine;mc;low;easy;cr;;;",
 "리버스 크런치": "Reverse_Crunch;bw;low;mid;cr;;;",
 "팔로프 프레스": "Pallof_Press;cable;low;easy;co;;;",
 "힙쓰러스트 머신": ";mc;low;easy;gl;;;",
 "덤벨 힙쓰러스트": ";db;low;easy;gl;;;",
 "머신 레터럴": ";mc;low;easy;lt;;;",
 "프론트 스쿼트": "Front_Barbell_Squat;bb;mid;hard;sq;;봉을 쇄골 위 어깨에 올리기/팔꿈치를 높게 들고 상체 세우기/무릎은 발끝 방향으로 앉기;",
 "박스 스쿼트": "Box_Squat;bb;mid;mid;sq;;벤치 높이를 무릎보다 조금 낮게/엉덩이를 뒤로 보내 가볍게 앉기/튕기지 말고 발 전체로 일어서기;",
 "덤벨 스쿼트": "Dumbbell_Squat;db;mid;easy;sq;;;",
 "맨몸 스쿼트": "Bodyweight_Squat;bw;low;easy;sq;;;",
 "와이드 스쿼트": "Wide_Stance_Barbell_Squat;bb;high;hard;sq;허벅지 안쪽, 엉덩이;발을 어깨보다 넓게, 발끝은 바깥으로/무릎은 발끝 방향/허리 말리기 전까지만 앉기;",
 "머신 스쿼트": "Lying_Machine_Squat;mc;low;easy;sq;;;",
 "스모 데드리프트": "Sumo_Deadlift;bb;high;hard;hg;;발을 넓게, 발끝은 바깥으로/봉을 정강이에 붙이고 가슴 들기/바닥을 밀며 엉덩이와 어깨를 함께 올리기;",
 "굿모닝": "Good_Morning;bb;high;mid;hg;;가벼운 무게로 시작/무릎 살짝 굽히고 엉덩이를 뒤로/등이 말리기 전까지만 숙이기;",
 "케이블 풀스루": "Pull_Through;cable;low;easy;hg;;등 편 채 엉덩이를 뒤로 접기/팔은 줄을 잡아 두기만/엉덩이를 조이며 일어서기;",
 "글루트 햄 레이즈": "Natural_Glute_Ham_Raise;bw;low;hard;lc;허벅지 뒤, 엉덩이;무릎을 받치고 발목 고정/무릎부터 머리까지 일직선/버틸 수 있는 만큼만 천천히 내려가기;",
 "바벨 런지": "Barbell_Lunge;bb;mid;mid;lg;;;",
 "바벨 스텝업": "Barbell_Step_Ups;bb;mid;mid;lg;;;",
 "맨몸 스플릿 스쿼트": "Split_Squats;bw;low;easy;lg;;;",
 "힙 어브덕션 머신": "Thigh_Abductor;mc;low;easy;gl;엉덩이;허리를 등받이에 붙이기/무릎을 바깥으로 천천히 벌리기/반동 없이 천천히 모으기;",
 "맨몸 킥백": "Glute_Kickback;bw;low;easy;gl;;팔과 무릎으로 바닥 짚기/허리 젖히지 말고 다리 뒤로 밀기/엉덩이를 조이고 천천히 내리기;",
 "바벨 카프레이즈": "Standing_Barbell_Calf_Raise;bb;mid;easy;cf;;;",
 "머신 벤치프레스": "Machine_Bench_Press;mc;low;easy;hp;;;",
 "케이블 체스트프레스": "Cable_Chest_Press;cable;low;easy;hp;;;",
 "디클라인 벤치프레스": "Decline_Barbell_Bench_Press;bb;low;mid;hp;가슴 아래, 삼두;;",
 "디클라인 덤벨프레스": "Decline_Dumbbell_Bench_Press;db;low;mid;hp;가슴 아래, 삼두;;",
 "덤벨 플라이": "Dumbbell_Flyes;db;low;easy;hp;가슴;팔꿈치를 살짝 굽힌 채 고정/가슴이 늘어날 만큼만 벌리기/큰 원을 그리며 천천히 모으기;",
 "펙덱 플라이": "Butterfly;mc;low;easy;hp;가슴;손잡이를 가슴 높이에 맞추기/어깨는 내리고 가슴 펴기/팔꿈치로 모은다는 느낌으로;",
 "케이블 크로스오버": "Cable_Crossover;cable;low;easy;hp;가슴;한 발 앞으로 나와 상체 살짝 숙이기/팔꿈치 살짝 굽힌 채 고정/손을 몸 앞에서 모으고 천천히 벌리기;",
 "인클라인 푸시업": "Incline_Push-Up;bw;low;easy;hp;;손을 벤치에 두고 몸을 일직선으로/가슴을 벤치 쪽으로 내리기/배에 힘 주고 밀어 올리기;",
 "인클라인 덤벨 플라이": "Incline_Dumbbell_Flyes;db;low;easy;ip;윗가슴;팔꿈치를 살짝 굽힌 채 고정/가슴이 늘어날 만큼만 벌리기/큰 원을 그리며 천천히 모으기;",
 "로우 케이블 크로스오버": "Low_Cable_Crossover;cable;low;easy;ip;윗가슴;팔꿈치를 살짝 굽힌 채 고정/가슴이 늘어날 만큼만 벌리기/큰 원을 그리며 천천히 모으기;",
 "디클라인 푸시업": "Decline_Push-Up;bw;low;mid;ip;;발을 벤치에 두고 몸을 일직선으로/허리가 처지지 않게 배에 힘/가슴을 바닥 쪽으로 내리고 밀기;",
 "해머그립 인클라인 덤벨프레스": "Hammer_Grip_Incline_DB_Bench_Press;db;low;mid;ip;;;",
 "아놀드 프레스": "Arnold_Dumbbell_Press;db;mid;mid;vp;;손바닥이 나를 보게 시작/밀면서 손목을 바깥으로 돌리기/허리 젖히지 않고 천천히 내리기;",
 "머신 밀리터리 프레스": "Machine_Shoulder_Military_Press;mc;low;easy;vp;;;",
 "프론트 레이즈": "Front_Dumbbell_Raise;db;low;easy;lt;어깨 앞;팔꿈치 살짝 굽히기/어깨 높이까지만 올리기/반동 없이 천천히 내리기;",
 "덤벨 업라이트 로우": "Standing_Dumbbell_Upright_Row;db;low;mid;lt;어깨 옆, 등 위;팔꿈치를 손보다 높게/가슴 아래까지만 당기기/어깨가 찝히면 범위 줄이기;",
 "케이블 업라이트 로우": "Upright_Cable_Row;cable;low;mid;lt;어깨 옆, 등 위;팔꿈치를 손보다 높게/가슴 아래까지만 당기기/어깨가 찝히면 범위 줄이기;",
 "스미스 벤트오버 로우": "Smith_Machine_Bent_Over_Row;mc;mid;mid;hr;;;",
 "하이 로우 머신": "Leverage_High_Row;mc;low;easy;hr;;;",
 "인버티드 로우": "Inverted_Row;bw;low;mid;hr;;몸을 일직선으로 버티기/가슴을 봉 쪽으로 당기기/날개뼈를 모았다가 천천히 펴기;",
 "스트레이트 암 풀다운": "Straight-Arm_Pulldown;cable;low;easy;vr;등 넓은 근육;팔꿈치를 살짝 굽힌 채 고정/손을 허벅지까지 내리기/상체를 흔들지 않기;",
 "로프 스트레이트 암 풀다운": "Rope_Straight-Arm_Pulldown;cable;low;easy;vr;등 넓은 근육;팔꿈치를 살짝 굽힌 채 고정/손을 허벅지까지 내리기/상체를 흔들지 않기;",
 "덤벨 풀오버": "Bent-Arm_Dumbbell_Pullover;db;low;mid;vr;등 넓은 근육, 가슴;허리가 뜨지 않게 배에 힘/팔꿈치 각도 유지/머리 뒤로 늘어나는 만큼만;",
 "벤치 리어델트 레이즈": "Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench;db;low;easy;rd;;허리 고정하고 상체 숙이기/팔꿈치를 옆으로 벌리기/반동 없이 천천히 내리기;",
 "시티드 리어델트 레이즈": "Seated_Bent-Over_Rear_Delt_Raise;db;mid;easy;rd;;허리 고정하고 상체 숙이기/팔꿈치를 옆으로 벌리기/반동 없이 천천히 내리기;",
 "바벨 리어델트 로우": "Barbell_Rear_Delt_Row;bb;mid;mid;rd;;;",
 "컨센트레이션 컬": "Concentration_Curls;db;low;easy;bc;;팔꿈치를 허벅지 안쪽에 대기/손목 꺾지 않고 당기기/끝까지 천천히 펴기;",
 "리버스 바벨컬": "Reverse_Barbell_Curl;bb;low;easy;bc;이두, 팔뚝;;",
 "머신 컬": "Machine_Bicep_Curl;mc;low;easy;bc;;;",
 "머신 프리처컬": "Machine_Preacher_Curls;mc;low;easy;bc;;위팔을 패드에 붙이기/반동 없이 당기기/끝까지 천천히 펴기;",
 "스파이더 컬": "Spider_Curl;bb;low;easy;bc;;가슴을 경사 벤치에 기대기/위팔은 바닥 쪽으로 늘어뜨려 고정/반동 없이 당기고 천천히 펴기;",
 "조트먼 컬": "Zottman_Curl;db;low;mid;bc;이두, 팔뚝;손바닥이 위로 향하게 올리기/위에서 손바닥을 아래로 돌리기/천천히 내리기;",
 "클로즈그립 벤치프레스": "Close-Grip_Barbell_Bench_Press;bb;low;mid;tc;삼두, 가슴;손은 어깨너비로/팔꿈치를 몸 옆에 붙여 내리기/손목은 곧게;",
 "머신 트라이셉스 익스텐션": "Machine_Triceps_Extension;mc;low;easy;tc;;;",
 "케이블 라잉 익스텐션": "Cable_Lying_Triceps_Extension;cable;low;easy;tc;;;",
 "다이아몬드 푸시업": "Push-Ups_-_Close_Triceps_Position;bw;low;mid;tc;삼두, 가슴;손을 가슴 아래 모으기/팔꿈치를 몸 옆에 붙여 내리기/허리가 처지지 않게 배에 힘;",
 "러시안 트위스트": "Russian_Twist;bw;mid;mid;co;;허리를 곧게 세우고 뒤로 기대기/어깨와 가슴을 함께 돌리기/허리 아프면 발을 바닥에;",
 "마운틴 클라이머": "Mountain_Climbers;bw;low;easy;co;;어깨 아래 손 짚고 몸 일직선/무릎을 가슴 쪽으로 번갈아 당기기/엉덩이가 뜨지 않게;",
 "크런치": "Crunches;bw;low;easy;cr;;;",
 "행잉 레그레이즈": "Hanging_Leg_Raise;bw;low;hard;cr;;봉에 매달려 몸 흔들림 멈추기/골반을 말며 다리 올리기/반동 없이 천천히 내리기;",
 "평행봉 니레이즈": "Knee_Hip_Raise_On_Parallel_Bars;bw;low;mid;cr;;등을 패드에 붙이기/무릎을 가슴 쪽으로 당기기/천천히 내리기;",
 "레그 풀인": "Flat_Bench_Leg_Pull-In;bw;low;easy;cr;;;",
 "바이시클 크런치": "Air_Bike;bw;low;easy;cr;;;"
};
const EXDB=Object.assign(Object.create(null),Object.fromEntries(Object.entries(EXRAW).map(([n,v])=>{const [id,eq,bk,lv,p,m,c,s]=v.split(';');return[n,{id,eq,bk,lv,p,muscles:m||PM[p],points:(c||PC[p]).split('/'),sec:s==='s'}]})));
const ALT=Object.assign(Object.create(null),{
 "스쿼트": [
  "핵스쿼트",
  "레그프레스",
  "스미스 스쿼트",
  "고블릿 스쿼트"
 ],
 "벤치프레스": [
  "덤벨 벤치프레스",
  "체스트프레스 머신",
  "스미스 벤치프레스",
  "푸시업"
 ],
 "데드리프트": [
  "트랩바 데드리프트",
  "루마니안 데드",
  "덤벨 루마니안 데드",
  "백 익스텐션"
 ],
 "루마니안 데드": [
  "덤벨 루마니안 데드",
  "스미스 루마니안 데드",
  "백 익스텐션",
  "시티드 레그컬"
 ],
 "불가리안 스플릿 스쿼트": [
  "리버스 런지",
  "스텝업",
  "스미스 스플릿 스쿼트",
  "레그프레스"
 ],
 "워킹 런지": [
  "리버스 런지",
  "맨몸 워킹 런지",
  "스텝업",
  "불가리안 스플릿 스쿼트"
 ],
 "레그컬": [
  "시티드 레그컬",
  "스탠딩 레그컬",
  "볼 레그컬",
  "덤벨 루마니안 데드"
 ],
 "시티드 로우": [
  "머신 로우",
  "원암 케이블 로우",
  "체스트 서포티드 덤벨로우",
  "바벨 로우"
 ],
 "랫풀다운": [
  "클로즈그립 랫풀다운",
  "언더그립 랫풀다운",
  "어시스트 풀업",
  "풀업"
 ],
 "풀업": [
  "어시스트 풀업",
  "랫풀다운",
  "언더그립 랫풀다운",
  "친업"
 ],
 "덤벨 숄더프레스": [
  "머신 숄더프레스",
  "스미스 숄더프레스",
  "바벨 오버헤드프레스"
 ],
 "인클라인 덤벨프레스": [
  "인클라인 머신프레스",
  "스미스 인클라인 프레스",
  "인클라인 바벨프레스",
  "덤벨 벤치프레스"
 ],
 "원암 덤벨로우": [
  "체스트 서포티드 덤벨로우",
  "원암 케이블 로우",
  "머신 로우",
  "시티드 로우"
 ],
 "딥스": [
  "시티드 딥 머신",
  "체스트프레스 머신",
  "벤치 딥스",
  "푸시다운"
 ],
 "레그프레스": [
  "핵스쿼트",
  "스미스 스쿼트",
  "고블릿 스쿼트",
  "스쿼트"
 ],
 "힙쓰러스트": [
  "힙쓰러스트 머신",
  "덤벨 힙쓰러스트",
  "글루트 브릿지",
  "싱글 레그 브릿지",
  "케이블 킥백"
 ],
 "레그익스텐션": [
  "싱글 레그 익스텐션",
  "고블릿 스쿼트",
  "스텝업"
 ],
 "사이드 레터럴": [
  "케이블 레터럴",
  "머신 레터럴",
  "밴드 레터럴"
 ],
 "페이스풀": [
  "리어델트 플라이",
  "로프 리어델트 로우",
  "밴드 풀어파트",
  "케이블 리어델트 플라이"
 ],
 "리어델트 플라이": [
  "덤벨 리어델트 플라이",
  "케이블 리어델트 플라이",
  "페이스풀",
  "밴드 풀어파트"
 ],
 "카프레이즈": [
  "레그프레스 카프레이즈",
  "시티드 카프레이즈",
  "스미스 카프레이즈",
  "덤벨 카프레이즈"
 ],
 "바벨컬": [
  "덤벨컬",
  "EZ바컬",
  "케이블컬",
  "프리처컬"
 ],
 "해머컬": [
  "로프 해머컬",
  "인클라인 해머컬",
  "덤벨컬"
 ],
 "푸시다운": [
  "로프 푸시다운",
  "덤벨 킥백",
  "케이블 오버헤드 익스텐션",
  "오버헤드 익스텐션"
 ],
 "오버헤드 익스텐션": [
  "케이블 오버헤드 익스텐션",
  "스컬크러셔",
  "로프 푸시다운",
  "덤벨 킥백"
 ],
 "플랭크": [
  "데드버그",
  "사이드 플랭크",
  "팔로프 프레스"
 ],
 "케이블 크런치": [
  "크런치 머신",
  "리버스 크런치",
  "데드버그"
 ]
});

// 예전 기록의 운동 이름은 그대로 읽되 새 후보에는 예전 이름을 보여주지 않아요.
Object.defineProperty(EXDB,"어시스트 딥스",{value:EXDB["시티드 딥 머신"],enumerable:false});

// 표시용 주 근육과 실루엣 영역을 한곳에서 연결해요.
const MUSCLE_REGIONS=Object.freeze({'가슴':['chest'],'어깨 앞':['frontShoulder'],'어깨 옆':['sideShoulder'],'어깨 뒤':['rearShoulder'],'등 넓은 근육':['lats'],'등 위':['upperBack'],'허리':['lowerBack'],'이두':['biceps'],'삼두':['triceps'],'복근':['abs'],'엉덩이':['glutes'],'허벅지 앞':['quads'],'허벅지 뒤':['hamstrings'],'종아리':['calves']});
const EX_MUSCLES=Object.freeze(Object.fromEntries(Object.getOwnPropertyNames(EXDB).map(n=>[n,EXDB[n]]).map(([n,x])=>[n,x.muscles.split(',').map(s=>s.trim()).flatMap(s=>({'윗가슴':['가슴'],'가슴 아래':['가슴'],'어깨':['어깨 앞','어깨 옆'],'등 가운데':['등 위'],'광배':['등 넓은 근육'],'몸통':['복근']}[s]||[s])).filter((s,i,a)=>MUSCLE_REGIONS[s]&&a.indexOf(s)===i)])));
