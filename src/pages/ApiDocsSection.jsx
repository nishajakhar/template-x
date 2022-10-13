import { useParams } from 'react-router-dom';
import '../styles/api-docs-section.scss';

import { useState, useEffect } from 'react';
import { MOCK_CONTENT, MOCK_MENU } from '../services/data';

const fetchContent = async slug => {
  const isIndex = slug === undefined || slug === null || slug === '';

  if (isIndex) {
    return MOCK_CONTENT;
  }

  let found = false;
  MOCK_MENU.sectionGroups.forEach(group => {
    group.sections.forEach(section => {
      if (section.slug === slug) {
        found = true;
      }
    });
  });

  if (!found) {
    throw new Error('404');
  }

  return MOCK_CONTENT;
};

const useSection = slug => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setContent(null);
      setError(null);
      try {
        let newContent = await fetchContent(slug);
        setContent(newContent);
      } catch (e) {
        setContent(null);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [slug]);

  return {
    loading,
    content,
    error,
  };
};
export default function ApiDocsSection() {
  const params = useParams();
  const { content, loading, error } = useSection(params.sectionSlug);

  if (loading || error || !content) {
    return;
  }

  return (
    <div className="api-docs-content">
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </div>
  );
}
