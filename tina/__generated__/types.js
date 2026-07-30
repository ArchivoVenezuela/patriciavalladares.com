export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const BiographyPartsFragmentDoc = gql`
    fragment BiographyParts on Biography {
  __typename
  title
  kicker
  folioLabel
  languagesTitle
  languagesBody
  educationTitle
  educationBody
  body
}
    `;
export const HomeHeroPartsFragmentDoc = gql`
    fragment HomeHeroParts on HomeHero {
  __typename
  label
  name
  titleLine
  institution
  figureLabel
  body
}
    `;
export const HomeThemesPartsFragmentDoc = gql`
    fragment HomeThemesParts on HomeThemes {
  __typename
  title
  kicker
  themes {
    __typename
    id
    title
    description
  }
  criticalAi {
    __typename
    machineReading
    communityReading
    captionMachine
    captionCommunity
    objectId
    objectLabel
    machineTags
    machineConfidence
    machineNote
    communityLead
    communityNote
  }
  body
}
    `;
export const HomeQuestionsPartsFragmentDoc = gql`
    fragment HomeQuestionsParts on HomeQuestions {
  __typename
  title
  kicker
  questions
  body
}
    `;
export const HomeProgramPartsFragmentDoc = gql`
    fragment HomeProgramParts on HomeProgram {
  __typename
  title
  kicker
  body
}
    `;
export const HomeProjectsOverviewPartsFragmentDoc = gql`
    fragment HomeProjectsOverviewParts on HomeProjectsOverview {
  __typename
  title
  kicker
  folioLabel
  toolsSectionTitle
  toolsIntro
  body
}
    `;
export const ResearchOverviewPartsFragmentDoc = gql`
    fragment ResearchOverviewParts on ResearchOverview {
  __typename
  title
  kicker
  folioLabel
  programSectionTitle
  themesSectionTitle
  monographSectionKicker
  body
}
    `;
export const ResearchMethodsPartsFragmentDoc = gql`
    fragment ResearchMethodsParts on ResearchMethods {
  __typename
  title
  kicker
  folioLabel
  methods
  body
}
    `;
export const ProjectPartsFragmentDoc = gql`
    fragment ProjectParts on Project {
  __typename
  slug
  title
  subtitle
  tier
  status
  featured
  homepageFeatured
  homepageItalic
  links {
    __typename
    label
    url
    external
  }
  homepage {
    __typename
    specimensLabel
    specimenCardLabel
    stats {
      __typename
      value
      label
      accent
    }
    specimens {
      __typename
      year
      id
      title
      meta {
        __typename
        label
        value
      }
      note
    }
  }
  summary
  body
}
    `;
export const PublicationsPartsFragmentDoc = gql`
    fragment PublicationsParts on Publications {
  __typename
  title
  kicker
  folioLabel
  intro
  booksSectionTitle
  articlesSectionTitle
  filterSectionTitle
  books {
    __typename
    id
    title
    subtitle
    venue
    publisher
    year
    type
    featured
    description
    coverImage
  }
  articles {
    __typename
    id
    title
    venue
    volume
    pages
    year
    type
    topic
    featured
  }
  body
}
    `;
export const PublicHumanitiesPartsFragmentDoc = gql`
    fragment PublicHumanitiesParts on PublicHumanities {
  __typename
  title
  kicker
  folioLabel
  projectsSectionTitle
  featuredProjectSlug
  introThemeId
  body
}
    `;
export const TeachingPartsFragmentDoc = gql`
    fragment TeachingParts on Teaching {
  __typename
  title
  kicker
  folioLabel
  mentorshipTitle
  courses {
    __typename
    id
    title
    code
    semester
    description
  }
  body
}
    `;
export const ContactPartsFragmentDoc = gql`
    fragment ContactParts on Contact {
  __typename
  title
  kicker
  folioLabel
  affiliationLabel
  emailLabel
  phoneLabel
  cvLabel
  cvButtonLabel
  linksLabel
  externalLinks {
    __typename
    label
    url
  }
  body
}
    `;
export const BiographyDocument = gql`
    query biography($relativePath: String!) {
  biography(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BiographyParts
  }
}
    ${BiographyPartsFragmentDoc}`;
export const BiographyConnectionDocument = gql`
    query biographyConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BiographyFilter) {
  biographyConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BiographyParts
      }
    }
  }
}
    ${BiographyPartsFragmentDoc}`;
export const HomeHeroDocument = gql`
    query homeHero($relativePath: String!) {
  homeHero(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeHeroParts
  }
}
    ${HomeHeroPartsFragmentDoc}`;
export const HomeHeroConnectionDocument = gql`
    query homeHeroConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeHeroFilter) {
  homeHeroConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeHeroParts
      }
    }
  }
}
    ${HomeHeroPartsFragmentDoc}`;
export const HomeThemesDocument = gql`
    query homeThemes($relativePath: String!) {
  homeThemes(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeThemesParts
  }
}
    ${HomeThemesPartsFragmentDoc}`;
export const HomeThemesConnectionDocument = gql`
    query homeThemesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeThemesFilter) {
  homeThemesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeThemesParts
      }
    }
  }
}
    ${HomeThemesPartsFragmentDoc}`;
export const HomeQuestionsDocument = gql`
    query homeQuestions($relativePath: String!) {
  homeQuestions(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeQuestionsParts
  }
}
    ${HomeQuestionsPartsFragmentDoc}`;
export const HomeQuestionsConnectionDocument = gql`
    query homeQuestionsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeQuestionsFilter) {
  homeQuestionsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeQuestionsParts
      }
    }
  }
}
    ${HomeQuestionsPartsFragmentDoc}`;
export const HomeProgramDocument = gql`
    query homeProgram($relativePath: String!) {
  homeProgram(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeProgramParts
  }
}
    ${HomeProgramPartsFragmentDoc}`;
export const HomeProgramConnectionDocument = gql`
    query homeProgramConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeProgramFilter) {
  homeProgramConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeProgramParts
      }
    }
  }
}
    ${HomeProgramPartsFragmentDoc}`;
export const HomeProjectsOverviewDocument = gql`
    query homeProjectsOverview($relativePath: String!) {
  homeProjectsOverview(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeProjectsOverviewParts
  }
}
    ${HomeProjectsOverviewPartsFragmentDoc}`;
export const HomeProjectsOverviewConnectionDocument = gql`
    query homeProjectsOverviewConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeProjectsOverviewFilter) {
  homeProjectsOverviewConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeProjectsOverviewParts
      }
    }
  }
}
    ${HomeProjectsOverviewPartsFragmentDoc}`;
export const ResearchOverviewDocument = gql`
    query researchOverview($relativePath: String!) {
  researchOverview(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ResearchOverviewParts
  }
}
    ${ResearchOverviewPartsFragmentDoc}`;
export const ResearchOverviewConnectionDocument = gql`
    query researchOverviewConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ResearchOverviewFilter) {
  researchOverviewConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ResearchOverviewParts
      }
    }
  }
}
    ${ResearchOverviewPartsFragmentDoc}`;
export const ResearchMethodsDocument = gql`
    query researchMethods($relativePath: String!) {
  researchMethods(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ResearchMethodsParts
  }
}
    ${ResearchMethodsPartsFragmentDoc}`;
export const ResearchMethodsConnectionDocument = gql`
    query researchMethodsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ResearchMethodsFilter) {
  researchMethodsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ResearchMethodsParts
      }
    }
  }
}
    ${ResearchMethodsPartsFragmentDoc}`;
export const ProjectDocument = gql`
    query project($relativePath: String!) {
  project(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ProjectParts
  }
}
    ${ProjectPartsFragmentDoc}`;
export const ProjectConnectionDocument = gql`
    query projectConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProjectFilter) {
  projectConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ProjectParts
      }
    }
  }
}
    ${ProjectPartsFragmentDoc}`;
export const PublicationsDocument = gql`
    query publications($relativePath: String!) {
  publications(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PublicationsParts
  }
}
    ${PublicationsPartsFragmentDoc}`;
export const PublicationsConnectionDocument = gql`
    query publicationsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PublicationsFilter) {
  publicationsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PublicationsParts
      }
    }
  }
}
    ${PublicationsPartsFragmentDoc}`;
export const PublicHumanitiesDocument = gql`
    query publicHumanities($relativePath: String!) {
  publicHumanities(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PublicHumanitiesParts
  }
}
    ${PublicHumanitiesPartsFragmentDoc}`;
export const PublicHumanitiesConnectionDocument = gql`
    query publicHumanitiesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PublicHumanitiesFilter) {
  publicHumanitiesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PublicHumanitiesParts
      }
    }
  }
}
    ${PublicHumanitiesPartsFragmentDoc}`;
export const TeachingDocument = gql`
    query teaching($relativePath: String!) {
  teaching(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TeachingParts
  }
}
    ${TeachingPartsFragmentDoc}`;
export const TeachingConnectionDocument = gql`
    query teachingConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TeachingFilter) {
  teachingConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TeachingParts
      }
    }
  }
}
    ${TeachingPartsFragmentDoc}`;
export const ContactDocument = gql`
    query contact($relativePath: String!) {
  contact(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContactParts
  }
}
    ${ContactPartsFragmentDoc}`;
export const ContactConnectionDocument = gql`
    query contactConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContactFilter) {
  contactConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContactParts
      }
    }
  }
}
    ${ContactPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    biography(variables, options) {
      return requester(BiographyDocument, variables, options);
    },
    biographyConnection(variables, options) {
      return requester(BiographyConnectionDocument, variables, options);
    },
    homeHero(variables, options) {
      return requester(HomeHeroDocument, variables, options);
    },
    homeHeroConnection(variables, options) {
      return requester(HomeHeroConnectionDocument, variables, options);
    },
    homeThemes(variables, options) {
      return requester(HomeThemesDocument, variables, options);
    },
    homeThemesConnection(variables, options) {
      return requester(HomeThemesConnectionDocument, variables, options);
    },
    homeQuestions(variables, options) {
      return requester(HomeQuestionsDocument, variables, options);
    },
    homeQuestionsConnection(variables, options) {
      return requester(HomeQuestionsConnectionDocument, variables, options);
    },
    homeProgram(variables, options) {
      return requester(HomeProgramDocument, variables, options);
    },
    homeProgramConnection(variables, options) {
      return requester(HomeProgramConnectionDocument, variables, options);
    },
    homeProjectsOverview(variables, options) {
      return requester(HomeProjectsOverviewDocument, variables, options);
    },
    homeProjectsOverviewConnection(variables, options) {
      return requester(HomeProjectsOverviewConnectionDocument, variables, options);
    },
    researchOverview(variables, options) {
      return requester(ResearchOverviewDocument, variables, options);
    },
    researchOverviewConnection(variables, options) {
      return requester(ResearchOverviewConnectionDocument, variables, options);
    },
    researchMethods(variables, options) {
      return requester(ResearchMethodsDocument, variables, options);
    },
    researchMethodsConnection(variables, options) {
      return requester(ResearchMethodsConnectionDocument, variables, options);
    },
    project(variables, options) {
      return requester(ProjectDocument, variables, options);
    },
    projectConnection(variables, options) {
      return requester(ProjectConnectionDocument, variables, options);
    },
    publications(variables, options) {
      return requester(PublicationsDocument, variables, options);
    },
    publicationsConnection(variables, options) {
      return requester(PublicationsConnectionDocument, variables, options);
    },
    publicHumanities(variables, options) {
      return requester(PublicHumanitiesDocument, variables, options);
    },
    publicHumanitiesConnection(variables, options) {
      return requester(PublicHumanitiesConnectionDocument, variables, options);
    },
    teaching(variables, options) {
      return requester(TeachingDocument, variables, options);
    },
    teachingConnection(variables, options) {
      return requester(TeachingConnectionDocument, variables, options);
    },
    contact(variables, options) {
      return requester(ContactDocument, variables, options);
    },
    contactConnection(variables, options) {
      return requester(ContactConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
