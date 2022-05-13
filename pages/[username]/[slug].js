import { firestore, getUserWithUsername, postToJSON } from "../../lib/firebase";
import { useDocumentData } from 'react-firebase-hooks/firestore';
import PostContent from "../../components/PostContent";
import styles from '../../styles/Post.module.css';

export async function getStaticProps({ params }) {
    const { username, slug } = params;
    const userDoc = await getUserWithUsername(username);

    let post;
    let path;

    if (userDoc) {
        const postRef = userDoc.ref.collection('posts').doc(slug);
        const postDoc = await postRef.get();

        if (!postDoc.exists) {
            return {
                notFound: true,
            }
        }

        post = postToJSON(postDoc);
        path = postRef.path;
    }

    return {
        props: { post, path },
        revalidate: 100,
    };
}

export async function getStaticPaths() {
    const snapshot = await firestore.collectionGroup('posts').get();

    const paths = snapshot.docs.map((doc) => {
        const { slug, username } = doc.data();
        return {
            params: { username, slug },
        };
    });
    return {
        paths,
        fallback: 'blocking',
    }
}

export default function Post(props) {
    const postRef = firestore.doc(props.path);
    const [realtimePost] = useDocumentData(postRef);

    const post = realtimePost || props.post;

    return (
        <main className={styles.container}>
            <section>
                <PostContent post={post} />
            </section>
            <aside className="card">
                <p>
                    <strong>{post.heartCount || 0} ♡</strong>
                </p>
            </aside>
        </main>
    );
}