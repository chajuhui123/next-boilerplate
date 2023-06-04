# Joy's Next Boilerplate

- Next.js 기반의 프론트 템플릿 프로젝트를 소개합니다.

### Clone

```bash
npx degit chajuhui123/next-boilerplate [your-directory-name]
```

- `degit` : npm 패키지로, degit remote 저장소 정보 및 history 가 남아있지 않아, 템플릿 클론시 유용

### 제공 기능

1. `useQueryFn`, `useStateWithValidator` 커스텀 훅
2. 서버 에러 메시지 처리, 세션 관리를 포함하는 `api axios fetch` 모듈
3. form data validation, query를 위한 `공통 함수`
4. 더 작은 단위의 validation, query parsing을 위한 `유틸 함수`
5. (Mutation, 스타일 초기화, CSS-IN-JS 관련 셋팅도 검토 및 준비할 예정입니다 😍)
