import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?:string
}
const ArticleDetailsPage = (props:ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id:string}>();
    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Article not found')}
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('Comments')} />
            <CommentList
                comments={[
                    {
                        id: '1',
                        text: 'comment 1',
                        user: { id: '1', username: 'Alex' },
                    },
                    {
                        id: '2',
                        text: 'comment 2',
                        user: { id: '2', username: 'Alex 2' },
                    },
                ]}
            />
        </div>
    );
};
export default memo(ArticleDetailsPage);
