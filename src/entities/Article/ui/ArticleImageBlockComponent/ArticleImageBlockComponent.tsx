import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleDetailsProps {
    className?: string;
    block:ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleDetailsProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
});
