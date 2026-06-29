export type PolicySection = {
  title: string;
  body: string[];
};

export type LocalizedPolicy = {
  language: "English" | "한국어";
  sections: PolicySection[];
};

export type PolicyContent = {
  slug: "privacy" | "terms";
  title: string;
  description: string;
  lastUpdated: string;
  operator: string;
  markets: string;
  contact: string;
  localized: LocalizedPolicy[];
};

const shared = {
  lastUpdated: "2026-06-29",
  operator: "Aully Fit",
  markets: "United Kingdom and South Korea",
  contact: "whltn8282@gmail.com",
};

export const privacyPolicy: PolicyContent = {
  slug: "privacy",
  title: "Privacy Policy",
  description:
    "How Aully Fit handles uploaded photos, generated result files, feedback reports, and deletion requests.",
  ...shared,
  localized: [
    {
      language: "English",
      sections: [
        {
          title: "Overview",
          body: [
            "Aully Fit helps users preview upper-clothing fit by uploading or capturing a photo, processing it on the Aully Fit server, and showing generated result images in the app.",
          ],
        },
        {
          title: "What We Collect",
          body: [
            "Photos selected from your gallery or captured with your camera.",
            "Generated result files, including masks, overlays, previews, and camera-window images.",
            "Feedback reports you submit, including a title, details, the related job ID, and a generated preview image.",
            "Technical information needed to operate the service, such as request timestamps and server logs.",
          ],
        },
        {
          title: "How We Use Photos",
          body: [
            "Photos are used only to generate your fit preview and related result files.",
            "Photos are not used for model training.",
            "Photos are not sold or shared with third parties for advertising.",
          ],
        },
        {
          title: "Face Data",
          body: [
            "Uploaded photos may include a user's face. Aully Fit does not collect face data for face recognition, identity verification, biometric identification, emotion analysis, or user profiling.",
            "The image processing model may temporarily detect whether a face-like/person-context region exists in the uploaded photo only to determine whether the photo is suitable for generating an upper-clothing fit preview.",
            "Aully Fit does not create, store, or retain face templates, faceprints, facial landmarks, biometric identifiers, or any separate face database.",
            "Face-related processing occurs on the Aully Fit server as part of processing the uploaded photo. Face data is not sold, used for advertising, used for tracking, or shared with third parties.",
            "Uploaded original photos and generated result files, including any visible face that may appear in those images, are permanently deleted within 24 hours unless the user submits a feedback report. Feedback reports keep the generated preview image and report details for product-quality review; original photos are not copied into feedback storage.",
          ],
        },
        {
          title: "Data Retention",
          body: [
            "Uploaded original photos and generated result files are stored temporarily for processing and display.",
            "These files are permanently deleted within 24 hours.",
            "If you submit a feedback report, Aully Fit may keep your report title, report details, job reference, and generated preview image to review model quality and improve the product. Original photos are not copied into feedback storage.",
          ],
        },
        {
          title: "Deletion Policy",
          body: [
            "Aully Fit uses hard deletion for uploaded original photos and generated result artifacts. Deleted files are not intentionally kept in a recovery area.",
            "Feedback report text and generated preview images may be retained for product improvement unless you request deletion.",
          ],
        },
        {
          title: "International Use",
          body: [
            "Aully Fit may be tested by users in the United Kingdom and South Korea. By using the service, you understand that photos and generated files may be processed on servers used by Aully Fit to provide the service.",
          ],
        },
        {
          title: "Contact",
          body: ["For privacy questions or deletion requests, contact whltn8282@gmail.com."],
        },
        {
          title: "Future Updates",
          body: [
            "This policy may be updated as Aully Fit adds new features, accounts, payments, or additional storage behavior.",
          ],
        },
      ],
    },
    {
      language: "한국어",
      sections: [
        {
          title: "개요",
          body: [
            "Aully Fit은 사용자가 사진을 업로드하거나 촬영하면 서버에서 상의 영역을 처리하고, 앱에서 생성된 결과 이미지를 보여주는 핏 프리뷰 서비스입니다.",
          ],
        },
        {
          title: "수집 및 처리하는 데이터",
          body: [
            "갤러리에서 선택하거나 카메라로 촬영한 사진",
            "마스크, 오버레이, 프리뷰, 카메라 윈도우 이미지 등 생성된 결과 파일",
            "사용자가 제출한 피드백 리포트의 제목, 내용, 관련 작업 ID, 생성된 프리뷰 이미지",
            "서비스 운영에 필요한 요청 시간, 서버 로그 등 기술 정보",
          ],
        },
        {
          title: "사진 사용 목적",
          body: [
            "사진은 핏 프리뷰와 관련 결과 파일을 생성하기 위한 목적으로만 사용됩니다.",
            "사진은 모델 학습에 사용되지 않습니다.",
            "사진은 광고 목적의 제3자 판매 또는 공유에 사용되지 않습니다.",
          ],
        },
        {
          title: "얼굴 데이터",
          body: [
            "업로드된 사진에는 사용자의 얼굴이 포함될 수 있습니다. Aully Fit은 얼굴 인식, 신원 확인, 생체 식별, 감정 분석 또는 사용자 프로파일링 목적으로 얼굴 데이터를 수집하지 않습니다.",
            "이미지 처리 모델은 상의 핏 프리뷰 생성에 적합한 사진인지 판단하기 위해 업로드된 사진에 얼굴 또는 사람 맥락으로 보이는 영역이 있는지 임시로 확인할 수 있습니다.",
            "Aully Fit은 얼굴 템플릿, faceprint, 얼굴 랜드마크, 생체 식별자 또는 별도의 얼굴 데이터베이스를 생성, 저장 또는 보관하지 않습니다.",
            "얼굴 관련 처리는 업로드된 사진 처리 과정의 일부로 Aully Fit 서버에서 이루어집니다. 얼굴 데이터는 판매, 광고, 추적 또는 제3자 공유에 사용되지 않습니다.",
            "업로드된 원본 사진과 생성된 결과 파일에 얼굴이 보이는 경우에도 해당 파일은 24시간 이내 영구 삭제됩니다. 사용자가 피드백 리포트를 제출하는 경우 생성된 프리뷰 이미지와 리포트 내용은 제품 품질 확인을 위해 보관될 수 있으나, 원본 사진은 피드백 보관용으로 복사하지 않습니다.",
          ],
        },
        {
          title: "데이터 보관 기간",
          body: [
            "업로드된 원본 사진과 생성된 결과 파일은 처리 및 표시를 위해 임시로 저장됩니다.",
            "해당 파일들은 24시간 이내 영구 삭제됩니다.",
            "사용자가 피드백 리포트를 제출하는 경우, Aully Fit은 모델 품질 확인과 제품 개선을 위해 리포트 제목, 내용, 작업 참조 정보, 생성된 프리뷰 이미지를 보관할 수 있습니다. 원본 사진은 피드백 보관용으로 복사하지 않습니다.",
          ],
        },
        {
          title: "삭제 정책",
          body: [
            "Aully Fit은 업로드된 원본 사진과 생성된 결과 파일에 대해 hard delete 방식을 사용합니다. 삭제된 파일은 복구 영역에 의도적으로 보관하지 않습니다.",
            "피드백 리포트의 텍스트와 생성된 프리뷰 이미지는 제품 개선을 위해 보관될 수 있으며, 삭제 요청 시 검토 후 삭제할 수 있습니다.",
          ],
        },
        {
          title: "국제 이용",
          body: [
            "Aully Fit은 영국과 한국 사용자를 대상으로 테스트될 수 있습니다. 서비스를 이용하는 경우, 사용자는 Aully Fit이 서비스를 제공하기 위해 사용하는 서버에서 사진과 생성 파일이 처리될 수 있음을 이해합니다.",
          ],
        },
        {
          title: "문의",
          body: ["개인정보 관련 문의 또는 삭제 요청은 whltn8282@gmail.com 으로 연락해주세요."],
        },
        {
          title: "향후 변경",
          body: [
            "Aully Fit에 계정, 결제, 저장 기능 또는 추가 데이터 처리 기능이 도입되는 경우 본 정책은 변경될 수 있습니다.",
          ],
        },
      ],
    },
  ],
};

export const termsOfService: PolicyContent = {
  slug: "terms",
  title: "Terms of Service",
  description:
    "The rules and limitations for using Aully Fit as an MVP fit preview service.",
  ...shared,
  localized: [
    {
      language: "English",
      sections: [
        {
          title: "Service Description",
          body: [
            "Aully Fit provides visual fit previews for reference only. The app lets users upload or capture a photo, generate upper-clothing preview images, and compare the result with a live camera overlay.",
          ],
        },
        {
          title: "Reference-Only Results",
          body: [
            "Aully Fit results may be inaccurate depending on photo quality, lighting, pose, clothing, background, camera angle, and model limitations.",
            "The service should not be treated as a guaranteed clothing recommendation, body measurement tool, medical tool, health tool, or professional tailoring service.",
          ],
        },
        {
          title: "User Responsibilities",
          body: [
            "You agree to use Aully Fit only with photos you have the right to upload.",
            "You should not upload unlawful, harmful, private, or non-consensual images.",
            "You should not attempt to overload, reverse engineer, bypass authentication, scrape, or abuse the service.",
          ],
        },
        {
          title: "Availability",
          body: [
            "Aully Fit is provided as an MVP and market-test service. Features may change, fail, or become temporarily unavailable.",
          ],
        },
        {
          title: "Feedback",
          body: [
            "If you submit feedback or a report, Aully Fit may use that feedback to improve the product. Feedback reports may include your written report details and a generated preview image.",
          ],
        },
        {
          title: "No Accounts or Payments",
          body: [
            "The current MVP does not include accounts, payments, credits, subscriptions, or saved user history.",
            "If these features are added later, these terms should be updated before launch.",
          ],
        },
        {
          title: "International Use",
          body: [
            "Aully Fit may be tested in the United Kingdom and South Korea. Users are responsible for using the service in a lawful and appropriate way in their location.",
          ],
        },
        {
          title: "Limitation of Liability",
          body: [
            "To the maximum extent permitted by applicable law, Aully Fit is not responsible for decisions made based on generated previews or for inaccuracies in model output.",
          ],
        },
        {
          title: "Contact",
          body: ["For questions about these terms, contact whltn8282@gmail.com."],
        },
      ],
    },
    {
      language: "한국어",
      sections: [
        {
          title: "서비스 설명",
          body: [
            "Aully Fit은 참고용 시각적 핏 프리뷰를 제공하는 서비스입니다. 사용자는 사진을 업로드하거나 촬영하고, 상의 영역 프리뷰 이미지를 생성한 뒤, 실시간 카메라 오버레이로 결과를 비교할 수 있습니다.",
          ],
        },
        {
          title: "참고용 결과",
          body: [
            "Aully Fit의 결과는 사진 품질, 조명, 자세, 의류, 배경, 카메라 각도, 모델 한계에 따라 부정확할 수 있습니다.",
            "본 서비스는 확정적인 의류 추천, 신체 치수 측정 도구, 의료/건강 도구, 전문 수선 서비스로 간주되어서는 안 됩니다.",
          ],
        },
        {
          title: "사용자 책임",
          body: [
            "사용자는 업로드할 권리가 있는 사진만 Aully Fit에 사용할 것에 동의합니다.",
            "불법적이거나 유해한 이미지, 사적인 이미지, 동의 없이 촬영되거나 공유된 이미지를 업로드해서는 안 됩니다.",
            "서비스 과부하, 리버스 엔지니어링, 인증 우회, 스크래핑, 악용 행위를 시도해서는 안 됩니다.",
          ],
        },
        {
          title: "서비스 제공 상태",
          body: [
            "Aully Fit은 MVP 및 시장 테스트 단계의 서비스입니다. 기능은 변경되거나 실패할 수 있으며, 일시적으로 이용이 불가능할 수 있습니다.",
          ],
        },
        {
          title: "피드백",
          body: [
            "사용자가 피드백 또는 리포트를 제출하는 경우, Aully Fit은 제품 개선을 위해 해당 피드백을 사용할 수 있습니다. 피드백 리포트에는 사용자가 작성한 내용과 생성된 프리뷰 이미지가 포함될 수 있습니다.",
          ],
        },
        {
          title: "계정 및 결제 없음",
          body: [
            "현재 MVP에는 계정, 결제, 크레딧, 구독, 저장된 사용자 히스토리 기능이 포함되어 있지 않습니다.",
            "향후 이러한 기능이 추가되는 경우, 정식 출시 전에 본 약관을 업데이트해야 합니다.",
          ],
        },
        {
          title: "국제 이용",
          body: [
            "Aully Fit은 영국과 한국에서 테스트될 수 있습니다. 사용자는 자신의 위치에서 서비스를 적법하고 적절하게 사용할 책임이 있습니다.",
          ],
        },
        {
          title: "책임 제한",
          body: [
            "관련 법률이 허용하는 최대 범위 내에서, Aully Fit은 생성된 프리뷰를 기반으로 한 사용자의 결정 또는 모델 출력의 부정확성에 대해 책임을 지지 않습니다.",
          ],
        },
        {
          title: "문의",
          body: ["본 약관에 대한 문의는 whltn8282@gmail.com 으로 연락해주세요."],
        },
      ],
    },
  ],
};

export const policies = {
  privacy: privacyPolicy,
  terms: termsOfService,
};
