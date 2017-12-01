<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">
    <xsl:template match="/root" name="wurui.ctrip-img-grid">
        <!-- className 'J_OXMod' required  -->
        <div class="J_OXMod oxmod-ctrip-img-grid" ox-mod="ctrip-img-grid">
            <div class="list" ox-refresh="append">
	            <xsl:for-each select="data/list/i[position() &lt;=16]">
	            	<a href="{href}">
	            		<img class="img" src="http://a.oxm1.cc/img/blank.png"  style="background-image:url({img})"/>
	            	</a>
	            </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
