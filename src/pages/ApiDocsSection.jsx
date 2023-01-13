import { useParams } from 'react-router-dom';
import '../styles/api-docs-section.scss';

import { useState, useEffect } from 'react';
import { MOCK_CONTENT, MOCK_MENU } from '../services/data';
import Category from '../components/Home/FAQ/Category';

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
    const languages = ['C#', 'JS', 'Javascript', 'PHP', 'Python', 'Java'];
    const [activeItem, setActiveItem] = useState(0);
    const params = useParams();
    const [code, setCode] = useState(`# GET /users/defunkt
    $ curl https://api.github.com/users/defunkt
    
    > {
    >   "login": "defunkt",
    >   "id": 2,
    >   "node_id": "MDQ6VXNlcjI=",
    >   "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
    >   "gravatar_id": "",
    >   "url": "https://api.github.com/users/defunkt",
    >   "html_url": "https://github.com/defunkt",
    >   ...
    > }`);
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
