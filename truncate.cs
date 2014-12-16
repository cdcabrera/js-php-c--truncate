
string Truncate(string strInput, int limit)
{
    if(!String.IsNullOrEmpty(strInput) && strInput.Length > limit)
    {
        int nxtSpc = strInput.LastIndexOf(" ", limit);
        strInput = string.Format("{0}...", strInput.Substring(0,(nxtSpc > 0)? nxtSpc : limit).Trim() );
    }

    return strInput;
}